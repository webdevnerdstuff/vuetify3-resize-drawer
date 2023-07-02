# Change Log
All notable changes to the "vuetify3-resize-drawer" plugin will be documented in this file.

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