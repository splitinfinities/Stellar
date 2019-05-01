import { Component, Prop, Watch, Element, State } from '@stencil/core';
import zxcvbn from "zxcvbn";

@Component({
  tag: 'stellar-password-requirements'
})
export class PasswordRequirements {
    @Element() element: HTMLElement;

    @Prop({reflectToAttr: true}) for: string;
    @Prop() size: "tiny"|"small"|"large";

    @State() input;
    @State() value;

    @State() length: boolean = false;
    @State() uppercase: boolean = false;
    @State() number: boolean = false;
    @State() symbol: boolean = false;
    @State() commonPasswords: boolean = true;
    @State() commonNames: boolean = true;
    @State() repeated: boolean = true;

    componentDidLoad() {
        setTimeout(() => {
            this.input = document.querySelector(`stellar-input[name="${this.for}"]`);
            this.input.addEventListener('change', (e) => {
                this.value = e.detail;
            })
        }, 1000)
    }

    get fs() {
        if (this.size === "tiny") {
            return "fs7";
        }
        else if (this.size === "small") {
            return "fs6";
        }
        else if (this.size === "large") {
            return "fs4";
        } else {
            return "fs5";
        }
    }

    get icon() {
        if (this.size === "tiny") {
            return "fs6";
        }
        else if (this.size === "small") {
            return "fs5";
        }
        else if (this.size === "large") {
            return "fs1";
        } else {
            return "fs4";
        }
    }

    @Watch('value')
    handleValueChange() {
        const result = zxcvbn(this.value);
        this.length = this.value.length >= 10;
        this.uppercase = (/[A-Z]/.test(this.value));
        this.number = (/[0-9]/.test(this.value));
        this.symbol = (/[^A-Za-z0-9]/.test(this.value));
        this.commonPasswords = result.feedback.warning !== "This is a very common password";
        this.commonNames = result.feedback.warning !== "Names and surnames by themselves are easy to guess";
        this.repeated = result.feedback.warning !== 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
    }

    renderLength() {
        return <p class={`${this.fs} flex items-center mb3 ${this.length ? 'theme-green' : 'theme-red'}`}>
            <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.length ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>10 characters or longer</small>
        </p>
    }

    renderUppercase() {
        return <p class={`${this.fs} flex items-center mb3 ${this.uppercase ? 'theme-green' : 'theme-red'}`}>
        <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.uppercase ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>At least 1 uppercase character</small>
        </p>
    }

    renderNumber() {
        return <p class={`${this.fs} flex items-center mb3 ${this.number ? 'theme-green' : 'theme-red'}`}>
        <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.number ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>At least 1 number</small>
        </p>
    }

    renderSymbol() {
        return <p class={`${this.fs} flex items-center mb3 ${this.symbol ? 'theme-green' : 'theme-red'}`}>
            <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.symbol ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>At least 1 symbol</small>
        </p>
    }

    renderCommonPasswords() {
        return <p class={`${this.fs} flex items-center mb3 ${this.commonPasswords ? 'theme-green' : 'theme-red'}`}>
            <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.commonPasswords ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>Cannot be common passwords ('password123 is bad')</small>
        </p>
    }

    renderCommonNames() {
        return <p class={`${this.fs} flex items-center mb3 ${this.commonNames ? 'theme-green' : 'theme-red'}`}>
            <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.commonNames ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>Cannot be a name ('andrew')</small>
        </p>
    }

    renderRepeatedKeys() {
        return <p class={`${this.fs} flex items-center mb3 ${this.repeated ? 'theme-green' : 'theme-red'}`}>
            <stellar-asset class={`${this.icon} fs4 dib mr2 theme-base7`} name={this.repeated ? "checkmark-circle-outline" : "close-circle-outline"} />
            <small>Cannot be repeated keys ('asdfasdfasdf')</small>
        </p>
    }

    render () {
        return [
            this.renderLength(),
            this.renderUppercase(),
            this.renderNumber(),
            this.renderSymbol(),
            this.renderCommonPasswords(),
            this.renderCommonNames(),
            this.renderRepeatedKeys(),
        ]
    }
}
