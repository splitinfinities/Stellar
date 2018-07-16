import { Component } from '@stencil/core';

@Component({
  tag: 'stellar-footer',
  styleUrl: 'footer.css'
})
export class Footer {
  render() {
    return (
      <footer>
        <p>footer!</p>
      </footer>
    );
  }
}
