# Change Log
All notable changes to the "vuetify3-resize-drawer" plugin will be documented in this file.

## v2.1.1
10-02-2023
[main] (@webdevnerdstuff)
* Fix build config to exclude Vuetify styles from being included in the build

## v2.1.0
08-24-2023
[main] (@webdevnerdstuff)
* Add @container classes to provide Vuetify grid class support for the drawer content, enhancing responsiveness without being constrained by screen size.
* Add Grid System section to documentation
* Add touch support for mobile devices
* Add emitted events for `drawer:mouseenter`, `drawer:mouseleave`, `handle:touchend`, `handle:touchmove`, and `handle:touchstart`
* Add `touchless` support to hide handle on mobile devices. This prop does not function the same as the prop which is not supported.
* Fix offsetWidth value that was returning the resized value (possible breaking change if you used emitted events to get the offsetWidth value)
* Fix issue with resized values being negative, returning positive values
* Fix width values that passed min/max width boundaries
* Fix issue with incorrect widths when min/max values set as percentage
* Fix issue with widthSnapBack prop preventing drawer resizing
* Fix `close` event not being emitted when drawer is closed
* Fix `update:modelValue` event not being emitted when model value was updated
* Update Vuetify package to v3.3.14
* Update other packages to latest versions
* Update Playground template to include grid drawer for testing

## v2.0.3
08-01-2023
[main] (@webdevnerdstuff)
* Add check for fasvg
* Add important to fa icon size

## v2.0.2
06-02-2023
[main] (@webdevnerdstuff)
* Update to turn off transition duration when resizing

## v2.0.0
06-02-2023
[main] (@webdevnerdstuff)
* Update `handleColor` prop to a string from an object. Now accepts various color values (variables, theme color names, color names, hex, rgb, rgba, etc)
* Add `maxWidth` and `minWidth` props to allow for a minimum and maximum width for the drawer.
  * Add `snapBackWidth` prop to allow for the drawer to snap back to the `maxWidth`/`minWidth` when the drawer is closed.
* Add `location` prop to allow `start` and `end` drawer locations
* Add `v-icon` to be used as handle with a new prop `handleIcon`
  * Add better support for `mdi` and `fa` icons
* Remove `top-icon` slot
* Update styles
* Add stronger typings
* Update how typings and props are defined
* Update Vuetify to current version `3.3.6`
* Improve organization of code
* Update documentation
* Add Developer Playground

## v1.0.3
05-13-2023
[main] (@webdevnerdstuff)
* Initial Release

## v1.0.0-beta
02-19-2023
[main] (@webdevnerdstuff)
* Beta release. (@webdevnerdstuff)
