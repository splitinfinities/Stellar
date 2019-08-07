import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
    dark: boolean
}

export default createProviderConsumer<State>({
    dark: false
}, (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />);
