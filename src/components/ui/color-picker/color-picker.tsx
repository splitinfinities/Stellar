import { Component, Prop, Element, State, Event, EventEmitter, Listen, Watch } from '@stencil/core';
import { colors } from '../../../global/colors';
import properties from 'css-custom-properties'

@Component({
    tag: 'stellar-color-picker',
    styleUrl: 'color-picker.css'
})
export class ColorPicker {
    @Element() element: HTMLElement;
    @Prop({mutable: true}) value: string = "red";
    @State() options: Array<string>;
    @Event() colorChanged: EventEmitter;

    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color)
        })

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    @Watch('value')
    valueChangedHandler(value: string) {
        this.colorChanged.emit(value);

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    @Listen('inputValueChanged')
    inputChangedHandler(event: CustomEvent) {
        this.value = event.detail

        properties.set({
            "--selected-color": `var(--${this.value}5)`
        }, this.element);
    }

    render() {
        return (
            <div class="wrap">
                {
                    this.options.map((option) => {
                        return <button value={option} class={option} style={{ "background": `var(--${option}5)` }} onClick={() => { this.value = option; }}></button>
                    })
                }
                <div class="placeholder"></div>
            </div>
        );
    }
}
