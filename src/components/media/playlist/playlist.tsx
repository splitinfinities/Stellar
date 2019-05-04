import { Component, Prop, State, Element, Method, Listen, h } from '@stencil/core';
import { asTime } from '../../../utils'

@Component({
  tag: 'stellar-playlist',
  styleUrl: 'playlist.css',
  shadow: true
})
export class Playlist {
  @Element() element: HTMLElement;

  @Prop() dark: Boolean = false;
  @Prop() autoplay: boolean = false;
  @State() current: number = 0;
  @State() currentTrack: CurrentSongInterface = {
    title: 'Loading...',
    artist: 'One sec...',
    picture: undefined
  };
  @Prop({mutable: true, reflectToAttr: true}) playlist: string = "show";

  @Prop() remember: boolean = true;
  @Prop({mutable: true, reflectToAttr: true}) artwork: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) view: "playlist"|"art" = "playlist";

  @Prop({mutable: true, reflectToAttr: true}) playing: boolean = false;
  @State() currentTime: number|string;
  @State() duration: number|string;
  @State() visualizer: HTMLWebAudioVisualizerElement;
  @State() audio: HTMLAudioElement;
  @State() progress: HTMLProgressElement;
  @State() progress_value: number = 0;
  @State() playlistItems: NodeListOf<HTMLStellarSongElement>;
  @State() currentPlaylistItem: HTMLStellarSongElement;
  @State() context: any;

  componentWillLoad() {
    var playlist = localStorage.getItem('playlist');
    this.playlist = playlist;
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

      localStorage.setItem('track', this.current.toString());
      localStorage.setItem('time', this.audio.currentTime.toString());
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

  loadFromStorage() {
    var track: any = parseInt(localStorage.getItem('track'));
    var time: any = parseFloat(localStorage.getItem('time'));
    var playlist: any = localStorage.getItem('playlist');

    this.playlist = playlist;

    if (track && time) {
      var itemToPlay: any = this.playlistItems[track];

      itemToPlay.play();

      this.audio.currentTime = time;
    }
  }

  @Method()
  async prepare (element) {
    if (this.currentPlaylistItem) {
      this.currentPlaylistItem.switching();
    }

    this.currentPlaylistItem = element;
    this.audio.src = this.currentPlaylistItem.src;
    this.audio.load();
    this.current = await this.currentPlaylistItem.getIndex();
    this.currentPlaylistItem.playing = true;
    this.currentTrack = await this.currentPlaylistItem.details();
  }

  @Method()
  async play () {
    this.playing = true;
    this.audio.play();

    if (!this.context) {
      var context = new AudioContext();
      const src = context.createMediaElementSource(this.audio);
      const waanalyser = await this.visualizer.connect(context);
      src.connect(waanalyser.analyser);
      waanalyser.analyser.connect(context.destination);
      this.context = context;
    }
  }

  @Method()
  async pause () {
    if (!this.audio.paused) {
      this.playing = false;
      this.audio.pause();
    } else {
      this.playing = true;
      this.audio.play();
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

    song.play();
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

  render() {
    return (
      <div id="player">
        <div class="playlist-title">
          <slot name="title"><h6>Playlist</h6></slot>
          <button class="playlist" onClick={ () => this.togglePlaylist() }>
            <h6 class="list">
              <stellar-asset name="musical-notes"></stellar-asset>
              list
            </h6>
          </button>
        </div>

        <div class="playlist-playing">
          <button onClick={ () => this.pause() } class="toggle-button" data-playing={this.playing}>
          {
            (this.playing)
            ? <ion-icon name="md-pause"></ion-icon>
            : <ion-icon name="md-play"></ion-icon>
          }
          </button>

          <div class="playlist-playing-details">
            <h2>{this.currentTrack.title}</h2>
            <h3>{this.currentTrack.artist}</h3>
          </div>

          {
            (this.currentTrack.picture !== undefined)
            ?
              <div class="playlist-playing-image">
                <img src={this.currentTrack.picture} onClick={ () => this.toggleAlbumArtView() } />
              </div>
            :
              <div></div>
          }

          <web-audio-visualizer tag={this.audio} type="bars" />
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
          <slot></slot>
        </div>
      </div>
    );
  }
}
