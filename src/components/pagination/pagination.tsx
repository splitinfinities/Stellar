import { Component, Prop, State, Watch, Element, Event, EventEmitter } from '@stencil/core';
import properties from 'css-custom-properties'
import Easing from 'easing'

@Component({
  tag: 'stellar-pagination',
  styleUrl: 'pagination.css'
})
export class Pagination {
  @Element() element: HTMLElement;

  /**
   * Public: Sets the max cap of pages you can skip through
   */
  @Prop() pages: number = 1;
  @Prop() type: "full"|"compact" = "full";
  @Prop() current: number = 1;
  @Prop() padding: number = 2;
  @Prop() color: string = "gray";

  @Prop() url: any = "#page-{0}";

  @Prop() skip: boolean = false;

  @State() __surroundingPages: any;

  @State() __current: number = 1;
  @State() __first: number = 1;
  @State() __previous: number|boolean = false;
  @State() __next: number|boolean = false;
  @State() __last: number;

  @State() blur: number = 0;

  __firstPageUrl() { return ""; }
  __previousPageUrl() { return ""; }
  __nextPageUrl() { return ""; }
  __lastPageUrl() { return ""; }

  @Event() changed: EventEmitter;

  @Watch('__current')
  currentObserver(current: number) {
    this.__previous = (current > this.__first) ? current - 1 : false;
    this.__next = (current < this.pages) ? current + 1 : false;

    this.changed.emit(current);

    if (this.type === "full") {
      this.updateSurroundingPages();
    }

    setTimeout(() => {
      const blurEvent = Easing.event(30, 'quadratic', { duration: 220, endToEnd: true, invert: false });
      blurEvent.on('data', (data: number) => {
        this.blur = data * 6;
      })
    }, 150)

    setTimeout(() => {
      const distance: HTMLElement = this.element.querySelector('.current-number')

      properties.set({
        "--indicator-left": `${distance.offsetLeft}px`
      }, this.element);
    }, 300)
  }

  componentWillLoad () {
    this.__first = 1;
    this.__current = this.current;
    this.__previous = (this.current > this.__first) ? this.current - 1 : false;
    this.__next = (this.current < this.pages) ? this.current + 1 : false;
    this.__last = this.pages;

    this.updateSurroundingPages();

    const distance: HTMLElement = this.element.querySelector('.current-number')

    properties.set({
      "--indicator-left": `${distance.offsetLeft}px`
    }, this.element);
  }

  updateSurroundingPages() {
    // @ts-ignore
    const pages = Array(this.pages).fill(0).map((item, index) => {
      const number = index + 1
      return {
        number: number,
        url: this.formatUrl(number),
        visible: this.isVisible(number),
        current: number === this.current
      }
    });

    this.__surroundingPages = pages;
  }

  isVisible(number) {
    var minPad = this.__current - this.padding;
    var maxPad = this.__current + this.padding;

    if (maxPad >= this.pages) {
      maxPad = this.pages;
    }

    if (minPad < 1) {
      minPad = 1;
    }

    return number >= minPad && number <= maxPad
  }

  handleChange(event: Event) {
    event.preventDefault();

    const target: any = event.currentTarget;
    this.__current = parseInt(target.value);
  }

  handleClick (event: UIEvent) {
    event.preventDefault();

    const target: any = event.currentTarget;
    this.__current = parseInt(target.dataset.page);
  }

  formatUrl(pageNumber) {
    return this.url.format(pageNumber);
  }

  renderFirstPageButton () {
    const hidden = (this.__current > 1) ? "no" : "yes";

    return (
      <a href={this.__firstPageUrl()} data-page={this.__first} onClick={(event: UIEvent) => this.handleClick(event)} class="icon first" data-hidden={hidden}>
        <stellar-asset name="skip-backward" block />
      </a>
    );
  }

  renderPreviousPageButton () {
    const hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";

    return (
      <a href={this.__previousPageUrl()} data-page={this.__previous} onClick={(event: UIEvent) => this.handleClick(event)} class="icon previous" data-hidden={hidden}>
        <stellar-asset name="rewind" block />
      </a>
    );
  }

  renderNextPageButton () {
    const hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";

    return (
      <a href={this.__nextPageUrl()} data-page={this.__next} onClick={(event: UIEvent) => this.handleClick(event)} class="icon next" data-hidden={hidden}>
        <stellar-asset name="fastforward" block />
      </a>
    );
  }

  renderLastPageButton () {
    const hidden = (this.__current < this.pages) ? "no" : "yes";

    return (
      <a href={this.__lastPageUrl()} data-page={this.__last} onClick={(event: UIEvent) => this.handleClick(event)} class="icon last" data-hidden={hidden}>
        <stellar-asset name="skip-forward" block />
      </a>
    );
  }

  renderPagesList () {
    return this.__surroundingPages.map((page) => {
      return (
        <a href={page.url} data-page={page.number} data-visible={page.visible} data-current={page.current} onClick={(event: UIEvent) => this.handleClick(event)} class={(page.number === this.__current) ? 'current-number number' : 'number' }>
          {page.number}
        </a>);
    });
  }

  renderPagesPreviousEllipsis () {
    const hidden = ((this.__current - this.padding) > 1) ? "no" : "yes";

    return (
        <div class="ellipsis previous" data-hidden={hidden}>
          &hellip;
        </div>
    );
  }

  renderPagesNextEllipsis () {
    const hidden = ((this.__current + this.padding + 1) < this.pages) ? "no" : "yes";

    return (
        <div class="ellipsis next" data-hidden={hidden}>
          &hellip;
        </div>
    );
  }

  render() {
    if (this.type === "full") {
      return (
        <span class="pagination-container">
          <div class="pagination-wrap">
            { this.renderFirstPageButton() }
            { this.renderPreviousPageButton() }

            <div class="pages">
              { this.renderPagesPreviousEllipsis() }
              { this.renderPagesList() }
              { this.renderPagesNextEllipsis() }

              <stellar-blur horizontal={this.blur}>
                <div class="indicator"></div>
              </stellar-blur>
            </div>

            { this.renderNextPageButton() }
            { this.renderLastPageButton() }
          </div>
        </span>
      );
    } else if (this.type === "compact") {
      return (
        <span class="compact-pagination-container">
          <p>Page</p>
          <stellar-input type="number" size="small" max={this.pages} value={this.__current} min={1} onChange={(e) => { this.handleChange(e) }} />
          of {this.pages}
        </span>
      )
    }
  }
}

String.prototype['format'] = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};
