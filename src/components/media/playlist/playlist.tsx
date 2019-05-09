import { Component, Prop, State, Element, Method, Listen, EventEmitter, Event } from '@stencil/core';
import { asTime } from '../../../utils'

@Component({
  tag: 'stellar-playlist',
  styleUrl: 'playlist.css',
  shadow: true
})
export class Playlist {
  @Element() element: HTMLElement;

  @Prop() visualizationColor: string = "gray";
  @Prop() autoplay: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) playlist: "show"|"hide" = "show";
  @Prop() name: string = "Playlist";
  @Prop() remember: boolean = true;
  @Prop({mutable: true, reflectToAttr: true}) artwork: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) view: "playlist"|"art" = "playlist";
  @Prop({mutable: true, reflectToAttr: true}) playing: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) load: boolean = false;
  @Prop() loading: boolean = false;

  @State() current: number = 0;
  @State() currentTrack: CurrentSongInterface = {
    title: 'Loading...',
    artist: 'One sec...',
    picture: undefined
  };
  @State() currentTime: number|string;
  @State() duration: number|string;
  @State() visualizer: HTMLWebAudioVisualizerElement;
  @State() audio: HTMLAudioElement;
  @State() progress: HTMLProgressElement;
  @State() progress_value: number = 0;
  @State() playlistItems: NodeListOf<HTMLStellarSongElement>;
  @State() currentPlaylistItem: HTMLStellarSongElement;
  @State() context: any;

  @Event() load_songs: EventEmitter;

  componentWillLoad() {
    this.loadFromStorage();
  }

  componentDidLoad() {
    this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
    this.audio = this.element.shadowRoot.querySelector('audio');
    this.progress = this.element.shadowRoot.querySelector('progress');
    this.playlistItems = this.element.querySelectorAll('stellar-song');
    this.currentPlaylistItem = this.element.querySelector('stellar-song[playing]');

    var allSongs = Array.from(this.playlistItems);

    allSongs.forEach((element: any, index) => {
      element.setIndex(index);
    });

    if (this.audio) {
      this.audio.volume = .70;
    }

    var playing: HTMLStellarSongElement = this.element.querySelector('stellar-song[playing]') || this.element.querySelector('stellar-song');

    playing.playing = true;

    this.prepare(playing);

    if (this.autoplay) {
      this.play();
    }

    if (this.remember) {
      this.loadFromStorage();
    }

    this.handleTimeUpdates();
    this.handleProgressClick();
  }

  handleProgressClick () {
    this.progress.addEventListener('click', (e) => {
      var x = e.offsetX;
      var clickedValue = x / this.progress.offsetWidth;

      this.audio.currentTime = clickedValue * this.audio.duration;
    });
  }

  handleTimeUpdates () {
    this.audio.addEventListener("timeupdate", () => {
      this.currentTime = asTime(parseFloat(this.audio.currentTime.toString()).toFixed(10));
      this.duration = asTime(parseFloat(this.audio.duration.toString()).toFixed(10));

      const value = (this.audio.currentTime !== 0 && this.audio.duration !== 0) ? ((this.audio.currentTime / this.audio.duration) * 100) : 0;

      this.progress_value = value;
    });

    this.audio.addEventListener('ended', this.next.bind(this));
  }

  @Listen('keydown')
  handleKeydown(event) {
    if (event.key === "space") {
      this.pause();
    } else if (event.key === "left") {
      this.previous();
    } else if (event.key === "right") {
      this.next();
    }
  }

  @Listen('loaded')
  async handleSongLoaded(event) {
    const el = event.detail.el;

    if (el.playing) {
      await this.prepare(el);
      await this.play(true);
    }
  }

  loadFromStorage() {
    var playlist: any = localStorage.getItem('playlist');

    if (playlist === "show" || playlist === "hide") {
      this.playlist = playlist;
    }
  }

  @Method()
  async prepare (element) {
    if (this.currentPlaylistItem) {
      this.currentPlaylistItem.switching();
    }

    this.currentTrack = {
      title: 'Loading...',
      artist: 'One sec...',
      picture: undefined
    };

    this.currentPlaylistItem = element;
    this.audio.src = this.currentPlaylistItem.src;
    await this.audio.load();
    this.current = await this.currentPlaylistItem.getIndex();
    this.currentPlaylistItem.playing = true;
    this.currentTrack = await this.currentPlaylistItem.details();
  }

  @Method()
  async play (skipDefault = false) {

    if (!skipDefault) {
      this.currentTrack = {
        title: 'Loading...',
        artist: 'One sec...',
        picture: undefined
      };
    }

    this.loading = true;
    this.playing = true;
    await this.audio.play();

    if (!this.context) {
      var context = new AudioContext();
      const src = context.createMediaElementSource(this.audio);
      const waanalyser = await this.visualizer.connect(context);
      src.connect(waanalyser.analyser);
      waanalyser.analyser.connect(context.destination);
      this.context = context;
    }

    this.currentTrack = await this.currentPlaylistItem.details();

    this.loading = false;
  }

  @Method()
  async pause () {
    if (!this.audio.paused) {
      this.playing = false;
      await this.audio.pause();
    } else {
      this.playing = true;
      await this.audio.play();
    }
  }

  @Method()
  async next() {
    var song;

    song = this.element.querySelector('stellar-song[playing]');

    if (this.current === this.playlistItems.length - 1) {
      song = this.element.querySelector('stellar-song:first-child');
    } else {
      song = song.nextElementSibling;
    }

    await song.play();
  }

  @Method()
  async previous() {
    var song;

    song = this.element.querySelector('stellar-song[playing]');
    song.removeAttribute('playing')

    if (this.current === 0) {
      song = this.element.querySelector('stellar-song:last-child');
    } else {
      song = song.previousElementSibling;
    }

    song.setAttribute('playing', true)
    song.play();
  }

  togglePlaylist() {
    if (this.playlist === "show") {
      this.playlist = "hide";
    } else {
      this.playlist = "show";
    }

    localStorage.setItem('playlist', this.playlist);
  }

  toggleAlbumArtView() {
    if (this.view === "playlist") {
      this.view = "art";
    } else {
      this.view = "playlist";
    }
  }

  async handlePlay() {
    console.log(this.load);

    if (!this.load) {
      this.load = true;
      this.load_songs.emit({});
    }

    this.pause()
  }

  render() {
    return (
      <div id="player">
        <div class="playlist-title">
          <h6>{this.name}</h6>
          <button class="playlist" onClick={ () => this.togglePlaylist() }>
            <h6 class="list">
              <stellar-asset name="musical-notes"></stellar-asset>
              list
            </h6>
          </button>
        </div>

        <div class="playlist-playing">
          <button onClick={ () => { this.handlePlay() }} class="toggle-button" data-playing={this.playing}>
          {
            (this.playing)
            ? <ion-icon name="md-pause"></ion-icon>
            : <ion-icon name="md-play"></ion-icon>
          }
          </button>

          {!this.load && <stellar-button tag="button" size="tiny" onClick={() => { this.load = true; this.load_songs.emit({}) }}>Load {this.name || "this playlist"}</stellar-button>}

          {this.load && <div class="playlist-playing-details">
            <h2>{this.currentTrack.title || 'Loading...'}</h2>
            <h3>{this.currentTrack.artist || 'One Sec...'}</h3>
          </div>}

          {
            this.load &&
              <div class="playlist-playing-image">
                {this.loading && <stellar-progress indeterminate />}
                {!this.loading && (this.currentTrack.picture !== undefined) && <img src={this.currentTrack.picture} onClick={ () => this.toggleAlbumArtView() } />}
              </div>
          }

          <web-audio-visualizer type={this.view === "art" ? "circle" : "bars"} color={this.visualizationColor} />
        </div>

        <div id="controls" class="controls">
          <button onClick={ () => this.previous() } class="button previous">
            <stellar-asset name="skip-backward"></stellar-asset>
          </button>
          <button onClick={ () => this.next() } class="button next">
            <stellar-asset name="skip-forward"></stellar-asset>
          </button>
        </div>

        <div class="playlist-progress">
          <h6 id="currentTime">{this.currentTime}</h6>
          <h6 id="totalTime">{this.duration}</h6>
          <progress id="progress" max="100" value={this.progress_value}></progress>
        </div>

        <audio id="playlist-audio" preload="auto" tabindex="0" controls>
          <source id="source" type="audio/mp3" />
        </audio>

        <div id="playlist" class={`playlist-list ${this.playlist}`}>
          {this.load && <slot></slot>}
        </div>
      </div>
    );
  }
}
