import { Component, Prop, Element, Watch } from '@stencil/core'
import { properties } from '../../../utils';

@Component({
    tag: 'stellar-keyframes',
    styleUrl: 'keyframes.css',
    shadow: true
})
export class Follow {
    @Element() element: HTMLElement;

    @Prop() src: string;
    @Prop() width: number = 400;
    @Prop() height: number = 400;
    @Prop({reflectToAttr: true}) frame: number = 1;

    componentWillLoad() {
        this.update()
    }

    @Watch('frame')
    update() {
        properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element)
    }

    render() {
        return <div class="background" style={{"background-image": `url(${this.src})`}}></div>
    }
}
