import { Component, Element, Prop, Watch, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'stellar-context',
    shadow: true
})
export class Context {
    @Element() element: HTMLElement;
    @Prop() time: boolean;
    @Prop() weather: boolean;
    @Prop() apikey: string = "92674815cd1092788c3539587f077d61";

    @State() timeState: "day" | "dusk" | "dawn" | "night";
    @State() weatherState: "clear-day" | "clear-night" | "rain" | "snow" | "sleet" | "wind" | "fog" | "cloudy" | "partly-cloudy-day" | "partly-cloudy-night";

    @Event() timeChange: EventEmitter;
    @Event() weatherChange: EventEmitter;

    componentWillLoad() {
        if (this.time) {
            this.handleTime()
        }

        if (this.weather) {
            this.handleWeather()
        }
    }

    @Watch('time')
    handleTime() {
        var now = new Date();
        this.timeState = this.TimeState(now.getHours())
    }

    @Watch('weather')
    handleWeather() {
        let icon;
        if (sessionStorage.weather !== undefined) {
            icon = sessionStorage.weather;
        } else {
            navigator.geolocation.getCurrentPosition(async (position) => {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apikey}/${lat},${lng}`;

                const result = await fetch(url);
                const json = await result.json();
                sessionStorage.weather = json.currently.icon.toLowerCase();
                icon = json.currently.icon.toLowerCase();

                this.weatherState = icon;
            }, () => {

            });
        }

        this.weatherState = icon;
    }

    @Watch('timeState')
    handleTimeState() {
        this.timeChange.emit(this.timeState)
        document.querySelector('html').setAttribute('time', this.timeState)
    }

    @Watch('weatherState')
    handleWeatherState() {
        this.weatherChange.emit(this.weatherState)
        document.querySelector('html').setAttribute('weather', this.weatherState)
    }

    TimeState = (time) => ({
        0: "night", 1: "night", 2: "night", 3: "night", 4: "night", 5: "night",
        6: "dawn", 7: "dawn", 8: "dawn", 9: "dawn", 10: "dawn", 11: "dawn",
        12: "day", 13: "day", 14: "day", 15: "day", 16: "day", 17: "day",
        18: "dusk", 19: "dusk", 20: "dusk", 21: "dusk", 22: "dusk", 23: "dusk",
    })[time] || '';
}
