import { Component, h, Prop, Watch, Host } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-theme'
})

export class Theme {
    @Prop() dark: boolean = false;
    @Prop() light: boolean = false;
    @Prop() body: boolean = false;
    @Prop() system: boolean = false;

    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }

        this.observeDark();
    }

    @Watch('dark')
    observeDark () {
        if (this.body && this.dark) {
            document.querySelector('html').classList.add('dark-mode');
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('html').classList.remove('dark-mode');
            document.querySelector('body').classList.remove('dark-mode');
        }

        if (this.body && this.light) {
            document.querySelector('html').classList.add('light-mode');
            document.querySelector('body').classList.add('light-mode');
        } else {
            document.querySelector('html').classList.remove('light-mode');
            document.querySelector('body').classList.remove('light-mode');
        }
    }

    render () {
        return <Host class={`${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""}`}>
            <Tunnel.Provider state={{dark: this.dark, light: this.light}}>
                <slot />
            </Tunnel.Provider>
        </Host>
    }
}
