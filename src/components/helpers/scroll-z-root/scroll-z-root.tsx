import { Component, Element, h, State, Listen, Prop } from '@stencil/core';
import { properties } from '../../../utils';

@Component({
    tag: 'stellar-scroll-z-root',
    styleUrl: 'scroll-z-root.css',
    shadow: true
})
export class ScrollZRoot {
    @Element() element: HTMLElement;

    @Prop() initialOriginX: number = 50;
    @Prop() initialOriginY: number = 30;
    @Prop() itemZ: number = 10;
    @Prop() cameraSpeed: number = 150;
    @Prop() cameraZ: number = -1;
    @Prop() scenePerspective: number = 1;

    @State() distanceFromTop: number = 0;
    @State() distanceFromBottom: number = 0;
    @State() sections: HTMLElement[]
    @State() perspectiveOrigin: {x: number, y: number, maxGap: number} = {x: 0, y: 0, maxGap: 10}

    randomFloat(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentWillLoad() {
        this.distanceFromTop = this.element.getBoundingClientRect().top
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom
        this.prepare()
    }

    prepare() {
        this.sections = Array.from(this.element.querySelectorAll('stellar-scroll-z-section'));

        properties.set({
            '--scenePerspective': this.scenePerspective,
            '--scenePerspectiveOriginX': this.initialOriginX,
            '--scenePerspectiveOriginY': this.initialOriginY,
            '--itemZ': this.itemZ,
            '--cameraSpeed': this.cameraSpeed,
            '--cameraZ': this.cameraZ,
            '--sectionHeight': 0
        }, document.documentElement);

        this.perspectiveOrigin = {
            x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue( "--scenePerspectiveOriginX" )),
            y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
            maxGap: 10
        };

        this.setSceneHeight()

        this.sections.forEach((section, index) => {
            const x = `${this.randomFloat(-20, 120)}%`;
            const y = `${this.randomFloat(-20, 120)}%`;
            const z = `calc(var(--itemZ) * var(--cameraSpeed) * ${index} * -1px)`;

            section.style.setProperty('transform', `translate3D(${x}, ${y}, ${z})`)
        })
    }

    setSceneHeight() {
        const numberOfItems = this.sections.length;
        const itemZ = parseFloat( getComputedStyle(document.documentElement).getPropertyValue("--itemZ") );
        const scenePerspective = parseFloat( getComputedStyle(document.documentElement).getPropertyValue( "--scenePerspective" ) );
        const cameraSpeed = parseFloat( getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed") );

        const height = window.innerHeight +
        scenePerspective * cameraSpeed +
        (itemZ / 2) * cameraSpeed * numberOfItems;

        document.documentElement.style.setProperty("--sectionHeight", `${height}`);
    }

    @Listen('scroll', {target: 'window'})
    moveCamera() {
        this.distanceFromTop = this.element.getBoundingClientRect().top
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom

        const offset = window.pageYOffset - this.distanceFromTop;

        if (offset >= 0) {
            document.documentElement.style.setProperty("--cameraZ", `${offset}`);
        } else {
            document.documentElement.style.setProperty("--cameraZ", `-1`);
        }
    }


    @Listen('mousemove', {target: 'window'})
    moveCameraAngle(event) {
        const xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
        const yGap = (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;

        const newPerspectiveOriginX = this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY = this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;

        document.documentElement.style.setProperty( "--scenePerspectiveOriginX", `${newPerspectiveOriginX}` );
        document.documentElement.style.setProperty( "--scenePerspectiveOriginY", `${newPerspectiveOriginY}` );
    }


    render () {
        return <div class="container">
            <div class="scene">
                <slot />
            </div>
        </div>
    }
}
