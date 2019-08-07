import { Component, State, h, Prop, Watch } from '@stencil/core';
import Tunnel from '../../dark_mode';

@Component({
  tag: 'stellar-dark-mode'
})

export class DarkMode {
    @State() dark: boolean = false;
    @Prop() body: boolean = false;
    @Prop() system: boolean = true;

    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
    }

    render () {
        return <Tunnel.Provider state={{dark: this.dark}}>
            <slot />
        </Tunnel.Provider>
    }
}
