import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
    dark: boolean,
    light: boolean
}

export default createProviderConsumer<State>({
    dark: false,
    light: false
}, (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />);
