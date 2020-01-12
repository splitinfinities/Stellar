import { newSpecPage } from '@stencil/core/testing';
import { PasswordRequirements } from './password-requirements';
import { Input } from '../input/input';

describe('stellar-progress', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [PasswordRequirements, Input],
      html: `<div>
        <stellar-password-requirements for="nice"></stellar-password-requirements>
        <stellar-input type="password" name="nice"></stellar-input>
      </div>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-password-requirements for=\"nice\">
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-red\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"close-circle-outline\"></stellar-asset>
        <small>
          10 characters or longer
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-red\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"close-circle-outline\"></stellar-asset>
        <small>
          At least 1 uppercase character
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-red\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"close-circle-outline\"></stellar-asset>
        <small>
          At least 1 number
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-red\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"close-circle-outline\"></stellar-asset>
        <small>
          At least 1 symbol
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-green\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"checkmark-circle-outline\"></stellar-asset>
        <small>
          Cannot be common passwords ('password123 is bad')
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-green\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"checkmark-circle-outline\"></stellar-asset>
        <small>
          Cannot be a name ('andrew')
        </small>
      </p>
      <p class=\"flex fs5 items-center ma0 mb3 pa0 theme-green\">
        <stellar-asset class=\"dib fs4 mr2 theme-base7\" name=\"checkmark-circle-outline\"></stellar-asset>
        <small>
          Cannot be repeated keys ('asdfasdfasdf')
        </small>
      </p>
    </stellar-password-requirements>
    `);
  });
})