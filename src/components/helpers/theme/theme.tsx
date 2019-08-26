import { Component, h, Prop, Watch, Host, State } from '@stencil/core';
import Tunnel from '../../theme';
import {colors} from '../../../utils/colors';

@Component({
  tag: 'stellar-theme'
})

export class Theme {
    @Prop() dark: boolean = false;
    @Prop() light: boolean = false;
    @Prop() body: boolean = false;
    @Prop() system: boolean = false;
    @Prop() base: string = "indigo";
    @Prop() complement: string = "red";
    @State() htmlEl: HTMLHtmlElement = document.querySelector('html');
    @State() bodyEl: HTMLBodyElement = document.querySelector('body');

    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }

        this.observeDark();
        this.observeColors();
    }

    @Watch('base')
    @Watch('complement')
    observeColors () {
        const options = Object.keys(colors);

        if (this.body) {
            options.forEach((color) => {
                this.htmlEl.classList.remove(`theme-${color}`)
                this.htmlEl.classList.remove(`complement-${color}`)
                this.bodyEl.classList.remove(`theme-${color}`)
                this.bodyEl.classList.remove(`complement-${color}`)
            })

            this.bodyEl.classList.add(`theme-${this.base}`)
            this.bodyEl.classList.add(`complement-${this.complement}`)

        }
    }

    @Watch('dark')
    observeDark () {
        if (this.body && this.dark) {
            this.htmlEl.classList.add('dark-mode');
            this.bodyEl.classList.add('dark-mode');
        } else {
            this.htmlEl.classList.remove('dark-mode');
            this.bodyEl.classList.remove('dark-mode');
        }

        if (this.body && this.light) {
            this.htmlEl.classList.add('light-mode');
            this.bodyEl.classList.add('light-mode');
        } else {
            this.htmlEl.classList.remove('light-mode');
            this.bodyEl.classList.remove('light-mode');
        }
    }

    render () {
        return <Host class={`${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""} theme-${this.base} complement-${this.complement}`}>
            <Tunnel.Provider state={{dark: this.dark, light: this.light}}>
                <slot />
            </Tunnel.Provider>
        </Host>
    }
}
