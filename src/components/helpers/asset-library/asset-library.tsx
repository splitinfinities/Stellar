import { Component, State, Element, h } from '@stencil/core'
import "ionicons"

@Component({
  tag: 'stellar-asset-library'
})
export class AssetLibrary {
  @Element() element: HTMLElement;

  @State() icons: any = []
  @State() kind: number = 0;

  componentWillLoad() {
    this.fetchIcons()
  }

  async fetchIcons() {
    const response = await fetch("https://unpkg.com/ionicons@4.2.0/dist/ionicons/data.json")
    const data = await response.json()

    this.icons = data.icons
  }

  render () {
    return (
      <div>
        <stellar-grid>
        {this.icons.map((icon) => {
          return (
            <stellar-documentation codeString={`<stellar-asset name="${icon.icons[this.kind]}" block></stellar-asset>`} />
          )
        })}
        </stellar-grid>
      </div>
    )
  }
}
