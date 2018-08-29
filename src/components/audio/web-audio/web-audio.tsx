import { Component, Prop, State, Method, Element } from '@stencil/core'
import { WebAudioVisualizer } from '../web-audio-visualizer/web-audio-visualizer'
import { WebAudioSource } from '../web-audio-source/web-audio-source'
import '../web-audio-debugger/web-audio-debugger'
import { BufferLoader } from '../bufferloader'
import { delay } from '../helpers'
import webmidi from 'webmidi';

interface WebAudioCustomEvent extends CustomEvent {
  note: {
    number: number,
    octave: number,
    name: number,
  },
  channel: number,
  data: object
};

@Component({
  tag: 'web-audio'
})
export class WebAudio {
  // This instance of the element
  @Element() element: HTMLElement
  @State() debugger: any

  @Prop() name: string = "web_audio"

  @State() prepared: Boolean = false

  @Prop() autoplay: Boolean
  @Prop() midi: Boolean = false

  @State() context: AudioContext
  @State() gain: GainNode

  @State() sources: Array<HTMLWebAudioSourceElement> = []
  @State() _sources: Array<Node>
  @State() _currentSource: WebAudioSource

  @State() keys: Object = {}

  @State() externalFiles: Array<string>

  @State() visualizers: Array<WebAudioVisualizer>
  @State() previousVisualizer: WebAudioVisualizer
  @State() visualizerNodes: Array<string>

  @Method()
  source (name) {
    return this.sources[name];
  }

  @Method()
  get_context () {
    return this.context;
  }

  @Method()
  is_prepared () {
    return this.prepared;
  }

  /******************
   * Private behavior
   **/
  componentDidLoad() {
    this.connect_debugger()
  }

  @Method()
  async connect_the_world() {
    this.connect_context()

    this.gain = this.context.createGain()

    this.connect_visualizers();
    this.connect_sources();
    this.connect_midi();

    this.prepared = true;

    return true
  }

  connect_context () {
    // @ts-ignore
    this.context = (window["webkitAudioContext"]) ? new webkitAudioContext : new AudioContext ;
    this.log("Connected to this.context")
  }

  connect_sources () {
    this.build_sources();
  }

  async build_sources () {
    this.log("Building sources")

    this._sources = Array.from(this.element.querySelectorAll('web-audio-source'))

    this.externalFiles = []

    this._sources.forEach((source, index) => {
      // @ts-ignore
      this.log(`(${index}) Preparing ${source.name}`)

      // @ts-ignore
      this.sources[source.name] = source

      // @ts-ignore
      let bufferLoader = new BufferLoader( this.context, [source.src], (bufferList) => {
        this.cache_sources(bufferList, source)
      })

      bufferLoader.load()
    }, this)
  }

  async cache_sources (bufferList, source) {
    await delay(20)

    bufferList.forEach((item) => {
      this.log(`Caching ${source.name}`)

      if (this.midi) {
        this.log(`Assigned ${source.name} to midi key ${source.midikey}, channel ${source.midichannel}`)
        if (this.keys[source.midichannel] == undefined) {
          this.keys[source.midichannel] = [];
        }

        this.keys[source.midichannel][source.midikey] = source
      }

      this._currentSource = source
      this._currentSource.assignBuffer(this, item)

      this.log(`Source ${source.name} is ready`)
    })

    this._currentSource = null
  }

  async connect_visualizers () {
    await delay(20)

    // @ts-ignore
    this.visualizers = Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`))

    if (this.visualizers) {
      this.log(`Attaching visualizers`)

      this.visualizers.forEach((visualizer, index) => {
        if (index === 0) {
          visualizer = visualizer.connect(this.context, this.context.destination)
        } else {
          visualizer = visualizer.connect(this.context, this.previousVisualizer.analyser)
        }

        this.previousVisualizer = visualizer
      });
    } else {
      this.log(`No visualizers for ${this.name}`)
    }

    if (this.visualizers.length >= 1) {
      this.gain.connect(this.previousVisualizer.analyser)
    } else {
      this.gain.connect(this.context.destination)
    }
  }

  connect_debugger () {
    this.debugger = document.querySelector(`web-audio-debugger[for="${this.name}"]`);

    this.log("Connected debugger")
  }

  log (string) {
    if (this.debugger) {
      this.debugger.addHistory(string);
    }
  }

  connect_midi () {
    if (this.midi) {
      webmidi.enable((err) => {
        if (err) {
          this.log("Midi couldn't be enabled." + err);
        } else {
          this.log("Midi is enabled")
        }

        var input = webmidi.inputs[0];

        if (input) {
          input.addListener('noteon', 'all', (e: WebAudioCustomEvent) => {
            this.log(`KEY: Channel: ${e.channel}, Note: ${e.note.number}, Name: ${e.note.name}, Oct: ${e.note.octave}`)

            if (this.keys[e.channel]) {
              this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
              this.keys[e.channel][e.note.number].play();
            }
          });

          input.addListener('pitchbend', 'all', (e) => {
            this.log(`PITCH: Channel: ${e.channel}, Value: ${e.value}`)
          });

          // Listen to control change message on all channels
          input.addListener('controlchange', 'all', (e) => {
            this.log(`CTRL: Channel: ${e.channel}, controller: ${e.controller.number}, Value: ${e.value}`)
            var event = new CustomEvent('midi-controller-update', { detail: e })
            document.dispatchEvent(event)
          });

          this.log("Listeners added for notes, pitch bend, and controllers.")
        }
      });
    }
  }
}
