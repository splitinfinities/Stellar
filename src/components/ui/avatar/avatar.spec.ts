import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from './avatar';

describe('stellar-avatar', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<stellar-avatar></stellar-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-avatar class=\"theme-teal\" color=\"teal\" initials=\"S\" name=\"Stellar\" shape=\"square\">
        <mock:shadow-root>
          <button class=\"wrapper\" title=\"You tabbed on an Avatar for Stellar\">
            <div class=\"content\">
              <div class=\"spacer\"></div>
              <div class=\"letter\" title=\"Stellar\">
                S
              </div>
            </div>
            <stellar-tooltip>
              Stellar
            </stellar-tooltip>
          </button>
        </mock:shadow-root>
      </stellar-avatar>
    `);

    expect(page.root.name).toBe("Stellar");
    expect(page.root.initials).toBe("S");
    expect(page.root.color).toBe("teal");

    page.root.name = "William M. Riley";

    expect(page.root.name).toBe("William M. Riley");
    expect(page.root.initials).toBe("W");
    expect(page.root.color).toBe("red");

    page.root.color = "#333333";

    expect(page.root.name).toBe("William M. Riley");
    expect(page.root.initials).toBe("W");
    expect(page.root.color).toBe("#333333");

    page.root.size = "large";
    page.root.name = "William Riley";

    expect(page.root.name).toBe("William Riley");
    expect(page.root.initials).toBe("WR");
    expect(page.root.color).toBe("pink");

    page.root.processing = true;
    page.root.name = "William M. Riley";

    expect(page.root.initials).toBe("");
  });
})