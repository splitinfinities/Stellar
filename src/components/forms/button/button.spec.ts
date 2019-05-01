import { Button } from './button';

it('should render and respond to changes appropriately', () => {
    const button = new Button();

    const rendered = button.render();
    expect(rendered.length).toEqual(5);
});
