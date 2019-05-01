import { Callout } from './callout';

it('should render', () => {
    const callout = new Callout();
    expect(callout.type).toBe("default");
    expect(callout.theme).toBe("gray");

    callout.type = "error";
});
