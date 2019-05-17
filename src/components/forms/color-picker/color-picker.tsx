import { Component, Prop, Element, State, Event, EventEmitter, Watch} from '@stencil/core';
import { colors } from '../../../utils';
import properties from 'css-custom-properties'

@Component({
    tag: 'stellar-color-picker',
    styleUrl: 'color-picker.css',
    shadow: true
})
export class ColorPicker {
    @Element() element: HTMLElement;
    @Prop({mutable: true, reflectToAttr: true}) val: string = "none";
    @Prop() notransparent: boolean = false;
    @State() options: Array<string>;
    @Event() change: EventEmitter;

    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color)
        })

        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }

    @Watch('val')
    valueChangedHandler(val: string) {
        this.change.emit(val);

        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }

    updateValue(color) {
        this.val = color;
    }

    render() {
        return <div class="wrap">
            {this.options.map(option => <button
                value={option}
                class={option}
                style={{ "background": `var(--${option}5)` }}
                onClick={() => { this.updateValue(option); }} />
            )}
            {!this.notransparent && <button
                value={"none"}
                class={"none"}
                style={{ "background": `var(--white)` }}
                onClick={() => { this.updateValue("none"); }} />}
            <div class="placeholder" />
        </div>
    }
}
