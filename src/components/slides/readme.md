# stellar-slides

The Slides component is a multi-section container. Each section can be swiped
or dragged between. It contains any number of [Slide](../Slide) components.


Adopted from Swiper.js:
The most modern mobile touch slider and framework with hardware accelerated transitions.

http://www.idangero.us/swiper/

Copyright 2016, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT


<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                                                  | Type                                       |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `autoHeight`            | `auto-height`             |                                                                                              | `boolean`                                  |
| `centeredSlides`        | `centered-slides`         |                                                                                              | `boolean`                                  |
| `direction`             | `direction`               |                                                                                              | `"horizontal"|"vertical"`                  |
| `effect`                | `effect`                  |                                                                                              | `"slide"|"fade"|"cube"|"coverflow"|"flip"` |
| `loop`                  | `loop`                    |                                                                                              | `boolean`                                  |
| `nested`                | `nested`                  |                                                                                              | `boolean`                                  |
| `options`               | --                        | Options to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options | `any`                                      |
| `pager`                 | `pager`                   | Show or hide the pager                                                                       | `boolean`                                  |
| `pagination`            | `pagination`              |                                                                                              | `boolean`                                  |
| `slidesPerView`         | `slides-per-view`         |                                                                                              | `number`                                   |
| `spaceBetween`          | `space-between`           |                                                                                              | `number`                                   |
| `speed`                 | `speed`                   |                                                                                              | `number`                                   |
| `watchSlidesProgress`   | `watch-slides-progress`   |                                                                                              | `boolean`                                  |
| `watchSlidesVisibility` | `watch-slides-visibility` |                                                                                              | `boolean`                                  |


## Events

| Event                     | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `ionSlideDidChange`       | Emitted after the active slide has changed.         |
| `ionSlideDrag`            | Emitted when the slider is actively being moved.    |
| `ionSlideNextEnd`         | Emitted when the next slide has ended.              |
| `ionSlideNextStart`       | Emitted when the next slide has started.            |
| `ionSlidePrevEnd`         | Emitted when the previous slide has ended.          |
| `ionSlidePrevStart`       | Emitted when the previous slide has started.        |
| `ionSlideReachEnd`        | Emitted when the slider is at the last slide.       |
| `ionSlideReachStart`      | Emitted when the slider is at its initial position. |
| `ionSlideTouchEnd`        | Emitted when the user releases the touch.           |
| `ionSlideTouchStart`      | Emitted when the user first touches the slider.     |
| `ionSlideTransitionEnd`   | Emitted when the slide transition has ended.        |
| `ionSlideTransitionStart` | Emitted when the slide transition has started.      |
| `ionSlideWillChange`      | Emitted before the active slide has changed.        |


## Methods

| Method             | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `getActiveIndex`   | Get the index of the active slide.                                                              |
| `getPreviousIndex` | Get the index of the previous slide.                                                            |
| `isBeginning`      | Get whether or not the current slide is the first slide.                                        |
| `isEnd`            | Get whether or not the current slide is the last slide.                                         |
| `length`           | Get the total number of slides.                                                                 |
| `lockSwipeToNext`  | Lock or unlock the ability to slide to the next slides.                                         |
| `lockSwipeToPrev`  | Lock or unlock the ability to slide to the previous slides.                                     |
| `lockSwipes`       | Lock or unlock the ability to slide to change slides.                                           |
| `slideNext`        | Transition to the next slide.                                                                   |
| `slidePrev`        | Transition to the previous slide.                                                               |
| `slideTo`          | Transition to the specified slide.                                                              |
| `startAutoplay`    | Start auto play.                                                                                |
| `stopAutoplay`     | Stop auto play.                                                                                 |
| `update`           | Update the underlying slider implementation. Call this if you've added or removed child slides. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
