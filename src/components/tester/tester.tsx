import { Component, State, h, Method } from '@stencil/core'

@Component({
    tag: 'stellar-tester',
})
export class Testington {
    @State() options: any[] = [{value: "nice", copy: "Nice"}];

    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    @Method()
    async new_options() {
        const length = Math.random() * 10 + 1;
        this.options = Array.from({length}, () => Math.floor(Math.random() * 10)).map(() => {
            const val = this.makeid(Math.random() * 10);
            return {value: val, copy: val};
        });
    }

    render() {
        return <div>
            <stellar-select>
                {this.options.map((option) => <stellar-item value={option.value}>{option.copy}</stellar-item>)}
            </stellar-select>
        </div>
    }
}
