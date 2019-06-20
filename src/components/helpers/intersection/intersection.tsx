import { Component, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'stellar-intersection'
})
export class intersection {
    @Prop() multiple: boolean;
    @Prop() in: Function = () => { console.log('in'); };
    @Prop() out: Function = () => { console.log('out'); };
    @Prop() margin: string = "0%";
    @Prop() element: HTMLElement|string;
    @State() io: any;

    componentWillLoad() {
        if (!this.element) {
            console.error('stellar-intersection needs an element or a seelctor passed into it')
        } else {
            this.addIntersectionObserver();
        }
    }

    componentDidUnload() {
        this.removeIntersectionObserver();
    }

    addIntersectionObserver () {
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
    }

    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }

    render () {
        return <slot />;
    }
}
