import { newSpecPage } from '@stencil/core/testing';
import { Comment } from './comment';

describe('stellar-comment', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Comment],
      html: `<stellar-comment></stellar-comment>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-comment>
        <mock:shadow-root>
          <div aria-label=\"Comment by Loading...: Loading...\" class=\"comment empty\" tabindex=\"0\">
            <div class=\"content\">
              <slot name=\"avatar\"></slot>
              <slot name=\"content\"></slot>
            </div>
            <div aria-label=\"In reply to  Loading... saying Loading...\" class=\"thread\">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </stellar-comment>
    `);
  });
})