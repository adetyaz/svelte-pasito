# svelte-pasito

A tiny, themeable, dependency-free fluid stepper component for Svelte 5.

**[Live demo →](https://svelte-pasito.vercel.app)**

This is a Svelte port of [pasito](https://github.com/joshpuckett/pasito) by
[@joshpuckett](https://github.com/joshpuckett), which originally ships React and Vue
implementations. All credit for the design, API, and CSS goes to the original project —
this package reimplements it for Svelte 5, using runes and reactive classes in place of
hooks/composables. See [LICENSE](./LICENSE) for full attribution.

## Install

```sh
npm install svelte-pasito
```

## Usage

```svelte
<script lang="ts">
	import { Stepper } from 'svelte-pasito';

	let active = $state(0);
</script>

<Stepper count={5} {active} onStepClick={(index) => (active = index)} />
```

### Autoplay

`useAutoPlay` drives `active` on a timer and hands back `filling`/`fillDuration` to feed
into `<Stepper>` for the progress-fill animation. Its inputs are getters (`() => value`)
rather than plain values, since the underlying `AutoPlayController` needs to read the
current value at the moment it fires, not a snapshot from when it was constructed.

```svelte
<script lang="ts">
	import { Stepper, useAutoPlay } from 'svelte-pasito';

	let active = $state(0);
	const count = 5;

	const autoplay = useAutoPlay({
		count: () => count,
		active: () => active,
		onStepChange: (index) => (active = index),
		stepDuration: () => 3000
	});
</script>

<Stepper
	{count}
	{active}
	onStepClick={(index) => (active = index)}
	filling={autoplay.filling}
	fillDuration={autoplay.fillDuration}
/>

<button onclick={autoplay.toggle}>
	{autoplay.playing ? 'Pause' : 'Play'}
</button>
```

If you'd rather manage the instance yourself, `AutoPlayController` is exported directly
too — `useAutoPlay(options)` is just `new AutoPlayController(options)`.

## Props

| Prop                 | Type                        | Default        | Description                                |
| -------------------- | --------------------------- | -------------- | ------------------------------------------- |
| `count`               | `number`                    | —              | Total number of steps                       |
| `active`              | `number`                    | —              | Zero-based active step index                |
| `onStepClick`         | `(index: number) => void`   | —              | Called when a step is clicked               |
| `orientation`         | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction                            |
| `maxVisible`          | `number`                    | —              | Max visible steps before windowing kicks in |
| `transitionDuration`  | `number`                    | `500`          | Step transition duration, in ms             |
| `easing`              | `string`                    | —              | CSS transition timing function              |
| `className`           | `string`                    | —              | Extra class for the container               |
| `filling`             | `boolean`                   | —              | Whether the active step is filling          |
| `fillDuration`        | `number`                    | —              | Fill animation duration, in ms              |

## Theming

Override appearance with CSS custom properties on `.pasito-container` (or pass a
`className` and scope the overrides to it):

```css
.pasito-container {
	--pill-dot-size: 8px;
	--pill-active-width: 24px;
	--pill-gap: 6px;
	--pill-bg: rgba(0, 0, 0, 0.12);
	--pill-active-bg: rgba(0, 0, 0, 0.8);
	--pill-fill-bg: rgba(255, 255, 255, 0.45);
	--pill-container-bg: rgba(0, 0, 0, 0.04);
	--pill-container-radius: 999px;
	--pill-container-border: rgba(0, 0, 0, 0.06);
}
```

## Accessibility

Steps render as `role="tab"` buttons with `aria-selected`, a roving `tabindex`, and
descriptive `aria-label`s, and all transitions respect `prefers-reduced-motion`.

## Developing

```sh
npm install
npm run dev       # dev server
npm run check     # svelte-check
npm run lint       # prettier --check . && eslint .
npm run build      # builds the library (svelte-package + publint)
```

`src/lib` is the published library; `src/routes` is the showcase/preview app.

## License

MIT — see [LICENSE](./LICENSE). Includes attribution to the original
[pasito](https://github.com/joshpuckett/pasito) project by Josh Puckett.
