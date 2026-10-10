# Changelog

All notable changes to `svelte-pasito` are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses [Semantic Versioning](https://semver.org/).

## [0.2.0] - 2026-10-10

### Added

- Keyboard navigation: `←` `→` (or `↑` `↓` when vertical) move between steps and wrap around, `Home` / `End` jump to the first / last step. Focus follows the selected step.
- `onfocusin` and `onfocusout` props on `Stepper`.
- `handleFocusIn` and `handleFocusOut` on `useAutoPlay` / `AutoPlayController`: wire them to the stepper so autoplay pauses while keyboard focus is inside it and resumes when focus leaves (only if it was playing before).

### Changed

- Steps that are animating out can no longer be reached with the arrow keys.

## [0.1.1] - 2026-09-24

### Changed

- README and package homepage link to the live demo.

## [0.1.0] - 2026-09-23

### Added

- Initial release: Svelte 5 port of pasito by Josh Puckett.
- `Stepper` component with horizontal and vertical orientation, windowing via `maxVisible`, and animated step add/remove.
- `useAutoPlay` and `AutoPlayController` for timed step changes with a fill animation.
- Theming through `--pill-*` CSS custom properties.
