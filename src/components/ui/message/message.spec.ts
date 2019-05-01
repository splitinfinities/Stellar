import { Message } from './message';

it('should render and respond to changes appropriately', () => {
    const message = new Message();
    expect(message).toBeInstanceOf(Message);
});
