import { Component, Prop, State, Element } from '@stencil/core';

@Component({
    tag: 'stellar-intersection'
})
export class Intersection {
    @Element() el: HTMLElement;
    @Prop() multiple: boolean;
    @Prop() in: Function = () => { };
    @Prop() out: Function = () => { };
    @Prop() margin: string = "0%";
    @Prop() element: HTMLElement | string;
    @State() io: any;

    componentWillLoad() {
        if (!this.element) {
            this.element = this.el;
        }

        this.addIntersectionObserver();
    }

    componentDidUnload() {
        this.removeIntersectionObserver();
    }

    addIntersectionObserver() {
        try {
            if ('IntersectionObserver' in window) {
                this.io = new IntersectionObserver((data: any) => {
                    if (!this.multiple) {
                        if (data[0].isIntersecting) {
                            this.in();
                            this.removeIntersectionObserver();
                        }
                    } else {
                        if (data[0].isIntersecting) {
                            this.in();
                        } else {
                            this.out();
                        }
                    }
                }, {
                    rootMargin: this.margin,
                    threshold: [0]
                })

                if (typeof this.element === "string" && this.element.constructor.name === "String") {
                    this.io.observe(document.querySelector(this.element));
                } else {
                    this.io.observe(this.element);
                }
            }
        } catch (e) {
            // no intersection observer
        }
    }

    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
}
