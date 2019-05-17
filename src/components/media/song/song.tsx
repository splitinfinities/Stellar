import { Component, Prop, State, Element, Method, Event, EventEmitter} from '@stencil/core';
import { leadingZeroIndex, relPathAsAbs } from "../../../utils";
import jsmediatags from 'jsmediatags/dist/jsmediatags.js';
import smallIndexedDb from 'small-indexeddb'

@Component({
    tag: 'stellar-song',
    assetsDirs: ['vendor'],
	styleUrl: 'song.css',
	shadow: true
})
export class Song {
	@Element() element: HTMLElement;

	@Prop() src: string;
	@Prop({reflectToAttr: true, mutable: true}) playing: boolean;
	@Prop() artwork: boolean;

	@State() _index: number = 0;
	@State() player: HTMLStellarPlaylistElement|any;
	@State() title: string;
	@State() album: string;
	@State() artist: string;
	@State() genre: string;
	@State() picture: string;
	@State() error: Object;

	@Event() songChanged: EventEmitter;
	@Event() loaded: EventEmitter;

	get url () {
		if (this.src.startsWith('http')) {
			return this.src
		} else if (this.src.startsWith('.')) {
			return window.location.origin + relPathAsAbs(this.src)
		} else {
			return window.location.origin + this.src
		}

    }

	async componentWillLoad () {
		this.player = this.element.closest('stellar-playlist');
		if (this.player.load) {
			this.load()
		}


		this.player.addEventListener('load_songs', () => {
			this.load()
		})
	}

	componentDidLoad () {

	}

	songChangedHandler() {
		this.songChanged.emit(this._index);
	}

	updateDetails (details) {
		this.title = details.title;
		this.album = details.album;
		this.genre = details.genre;
		this.artist = details.artist;
		this.picture = details.picture;
	}

	@Method()
	async load () {
        const transaction = await smallIndexedDb('songs');

        const details = await transaction('readonly', store => store.get(this.src))
		if (!details) {
			jsmediatags.read(this.url, {
				onSuccess: async (tag) => {
					var itemToSave: SongInterface = {
						title: tag.tags.title,
						album: tag.tags.album,
						genre: tag.tags.genre,
						artist: tag.tags.artist,
						picture: tag.tags.picture
                    };

					if (tag.tags.picture) {
						var base64String = "";

						for (var i = 0; i < tag.tags.picture.data.length; i++) {
							base64String += String.fromCharCode(tag.tags.picture.data[i]);
						}

						var base64 = "data:image/jpeg;base64," + window.btoa(base64String);

                        itemToSave.picture = base64;

                        await transaction('readwrite', store => store.put(base64, itemToSave.album + "_picture"))

					} else {
						itemToSave.picture = undefined;
                    }

                    await transaction('readwrite', store => store.put(JSON.stringify(itemToSave), this.src))

					this.updateDetails(itemToSave);
				},
				onError: (error) => {
					console.log(error);
					this.error = error;
				}
			});
		} else {
            var songDetails = JSON.parse(details);
            const picture = await transaction('readonly', store => store.get(songDetails.album + "_picture"))
			songDetails.picture = picture;

			this.updateDetails(songDetails);
		}

		this.loaded.emit({el: this.element});
	}

	@Method()
	async details () {
		return {
			'title': this.title,
			'album': this.album,
			'genre': this.genre,
			'artist': this.artist,
			'picture': this.picture
		}
	}

	@Method()
	async preload () {
		var audio = new Audio();
		audio.src = this.src;
		audio.preload = "auto";
		audio.volume = 1;
	}

	@Method()
	async play() {
		if (!this.playing) {
			this.songChangedHandler();
			this.playing = true;
			this.player.prepare(this.element);
			this.player.play();
		}
	}

	@Method()
	async switching() {
		this.playing = false;
	}

	@Method()
	async getIndex() {
		return this._index;
	}

	@Method()
	async setIndex(value) {
		this._index = value;
	}

	render() {
		return (
			<button onClick={ () => this.play() }>
                <span class="index">
                    {!this.playing && leadingZeroIndex(this._index)}
                    {this.playing && <stellar-asset name="play" />}
                </span>
				<div class="tracklisting">
					{this.artwork && <img src={this.picture} class="preview-image" />}
					<h2><span>{this.title || "Loading..."}</span> / {this.artist || "Loading..."}</h2>
				</div>
				<img src={this.picture} class="backdrop" />
			</button>
		);
	}
}
