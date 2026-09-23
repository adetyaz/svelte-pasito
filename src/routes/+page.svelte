<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Stepper, useAutoPlay } from '../lib/index.ts';
	import { photos, type Photo } from './photos.ts';

	type Theme = 'default' | 'minimal' | 'hacker' | 'warm' | 'brutalist';
	const themes: { id: Theme; label: string }[] = [
		{ id: 'default', label: 'Default' },
		{ id: 'minimal', label: 'Minimal' },
		{ id: 'hacker', label: 'Hacker' },
		{ id: 'warm', label: 'Warm' },
		{ id: 'brutalist', label: 'Brutalist' }
	];
	let theme = $state<Theme>('default');
	const themeClass = $derived(theme === 'default' ? '' : `theme-${theme}`);
	const set = $derived(photos[theme]);

	// Hero carousel
	let heroCount = $state(3);
	let heroActive = $state(0);
	const heroPrev = () => (heroActive = (heroActive - 1 + heroCount) % heroCount);
	const heroNext = () => (heroActive = (heroActive + 1) % heroCount);
	const removeStep = () => {
		heroCount -= 1;
		if (heroActive >= heroCount) heroActive = heroCount - 1;
	};
	const addStep = () => (heroCount += 1);

	// Vertical carousel
	const verticalCount = 4;
	let verticalActive = $state(0);

	// Autoplay carousel
	const autoplayCount = 3;
	let autoplayActive = $state(0);
	const autoplay = useAutoPlay({
		count: () => autoplayCount,
		active: () => autoplayActive,
		onStepChange: (index) => (autoplayActive = index),
		stepDuration: () => 4000
	});
	autoplay.playing = true;

	type Token = { text: string; cls?: string };
	const tokenRe =
		/('[^']*'|"[^"]*")|\b(import|from|const|let|function|return|export)\b|(\$state|\$props|\$derived|\$effect)|(<\/?[A-Za-z][\w.]*|\/?>)|(\b\d+\b)/g;

	function highlight(line: string): Token[] {
		const out: Token[] = [];
		let last = 0;
		for (const m of line.matchAll(tokenRe)) {
			if (m.index > last) out.push({ text: line.slice(last, m.index) });
			const cls = m[1]
				? 'text-amber-600 dark:text-amber-400'
				: m[2]
					? 'text-rose-600 dark:text-rose-400'
					: m[4]
						? 'text-sky-700 dark:text-sky-400'
						: 'text-violet-600 dark:text-violet-400';
			out.push({ text: m[0], cls });
			last = m.index + m[0].length;
		}
		if (last < line.length) out.push({ text: line.slice(last) });
		return out;
	}

	let copied = $state<string | null>(null);
	async function copy(text: string) {
		await navigator.clipboard.writeText(text);
		copied = text;
		setTimeout(() => (copied = null), 1500);
	}

	const unsplashUrl = 'https://unsplash.com/?utm_source=svelte-pasito&utm_medium=referral';
	// a literal closing script tag here would end this component's <script> block
	const closeScript = '</' + 'script>';
	const installCode = 'npm i svelte-pasito';
	const agentPrompt =
		'Install svelte-pasito (npm i svelte-pasito). Import the Stepper component, then add a stepper to my Svelte file with 5 steps and click-to-navigate.';

	const usageCode = `<script lang="ts">
  import { Stepper } from 'svelte-pasito'

  let active = $state(0)
${closeScript}

<Stepper
  count={5}
  {active}
  onStepClick={(i) => (active = i)}
/>`;

	const autoplayCode = `<script lang="ts">
  import { Stepper, useAutoPlay } from 'svelte-pasito'

  let active = $state(0)

  const autoplay = useAutoPlay({
    count: () => 5,
    active: () => active,
    onStepChange: (i) => (active = i),
    stepDuration: () => 5000,
    loop: () => true
  })
${closeScript}

<Stepper
  count={5}
  {active}
  onStepClick={(i) => (active = i)}
  filling={autoplay.filling}
  fillDuration={autoplay.fillDuration}
/>`;

	const darkThemeCode = `.my-dark-stepper {
  --pill-bg: rgba(255, 255, 255, 0.15);
  --pill-active-bg: rgba(255, 255, 255, 0.9);
  --pill-fill-bg: rgba(255, 255, 255, 0.3);
  --pill-container-bg: rgba(255, 255, 255, 0.1);
  --pill-container-border: rgba(255, 255, 255, 0.12);
}`;

	const stepperProps: [string, string, string][] = [
		['count', 'number', 'Total number of steps'],
		['active', 'number', 'Zero-based active step index'],
		['onStepClick', '(index: number) => void', 'Called when a step is clicked'],
		['orientation', '"horizontal" | "vertical"', 'Layout direction. Default: "horizontal"'],
		['maxVisible', 'number', 'Max visible steps before windowing kicks in'],
		['transitionDuration', 'number', 'Transition duration in ms. Default: 500'],
		['easing', 'string', 'CSS timing function. Default: cubic-bezier(0.215, 0.61, 0.355, 1)'],
		['filling', 'boolean', 'Show fill progress on the active step'],
		['fillDuration', 'number', 'Fill animation duration in ms. Default: 3000'],
		['className', 'string', 'Extra class on the container, for variable overrides']
	];

	const autoPlayOptions: [string, string, string][] = [
		['count', '() => number', 'Total number of steps'],
		['active', '() => number', 'Current active step'],
		['onStepChange', '(index: number) => void', 'Called to advance the step'],
		['stepDuration', '() => number', 'Time per step in ms. Default: 3000'],
		['loop', '() => boolean', 'Loop back to the first step. Default: true'],
		['enabled', '() => boolean', 'Enable/disable autoplay. Default: true']
	];

	const autoPlayReturns: [string, string, string][] = [
		['playing', 'boolean', 'Current playback state (reactive)'],
		['toggle', '() => void', 'Toggle play/pause'],
		['filling', 'boolean', 'Pass to Stepper filling prop'],
		['fillDuration', 'number', 'Pass to Stepper fillDuration prop']
	];

	const themeVars: [string, string, string][] = [
		['--pill-dot-size', '8px', 'Diameter of inactive dots'],
		['--pill-active-width', '24px', 'Width of the active pill'],
		['--pill-gap', '6px', 'Space between steps'],
		['--pill-bg', 'rgba(0,0,0,0.12)', 'Inactive dot color'],
		['--pill-active-bg', 'rgba(0,0,0,0.8)', 'Active pill color'],
		['--pill-fill-bg', 'rgba(255,255,255,0.45)', 'Autoplay fill bar color'],
		['--pill-container-bg', 'rgba(0,0,0,0.04)', 'Container background'],
		['--pill-container-border', 'rgba(0,0,0,0.06)', 'Container border color'],
		['--pill-container-radius', '999px', 'Container border radius']
	];

	const navLinks = [
		['#vertical', 'Vertical'],
		['#autoplay', 'Autoplay'],
		['#themes', 'Themes'],
		['#installation', 'Installation'],
		['#usage', 'Usage'],
		['#api-reference', 'API Reference'],
		['#theming', 'Theming']
	];

	const glassBtn = 'ctl flex h-8 w-8 shrink-0 items-center justify-center';

	const sized = (src: string, w: number) => src.replace(/w=\d+/, `w=${w}`).replace(/q=\d+/, 'q=70');
	const srcset = (src: string) => [480, 800, 1200].map((w) => `${sized(src, w)} ${w}w`).join(', ');
	const slideSizes = '(min-width: 704px) 672px, calc(100vw - 32px)';
</script>

<svelte:head>
	<link rel="preconnect" href="https://images.unsplash.com" />
</svelte:head>

{#snippet icon(d: string)}
	<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
		<path
			{d}
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

{#snippet slides(list: Photo[], active: number)}
	{#key theme}
		<div class="absolute inset-0" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
			{#each list as p, i (p.src)}
				<img
					class="slide"
					src={sized(p.src, 800)}
					srcset={srcset(p.src)}
					sizes={slideSizes}
					alt={p.alt}
					aria-hidden={i !== active}
					loading={i === 0 ? 'eager' : 'lazy'}
					decoding="async"
					style:opacity={i === active ? 1 : 0}
				/>
			{/each}
		</div>
	{/key}
{/snippet}

{#snippet credit(p: Photo | undefined)}
	{#if p}
		<p class="credit faint mt-3 text-center text-xs">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external Unsplash profile URL -->
			Photo by <a class="link underline" href={p.authorUrl} target="_blank" rel="noopener noreferrer"
				>{p.author}</a
			>
			on <a class="link underline" href={unsplashUrl} target="_blank" rel="noopener noreferrer"
				>Unsplash</a
			>
		</p>
	{/if}
{/snippet}

{#snippet codeBlock(code: string)}
	<div class="surface group relative mt-4 overflow-hidden rounded-xl">
		<button
			class="faint absolute top-3 right-3 rounded-md p-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
			aria-label="Copy"
			onclick={() => copy(code)}
		>
			{copied === code ? 'Copied' : 'Copy'}
		</button>
		<pre class="code overflow-auto p-4 leading-relaxed"><code class="block"
				>{#each code.split('\n') as line, i (i)}<div class="min-h-[1.25em]">{#each highlight(line) as t, j (j)}{#if t.cls}<span
									class={t.cls}>{t.text}</span
								>{:else}{t.text}{/if}{/each}</div>{/each}</code
			></pre>
	</div>
{/snippet}

{#snippet table(head: [string, string, string], rows: [string, string, string][])}
	<div class="-mx-4 mt-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
		<table class="w-full min-w-[520px] text-sm">
			<thead>
				<tr class="rule border-b">
					<th class="w-40 py-2 pr-4 text-left font-medium">{head[0]}</th>
					<th class="w-44 py-2 pr-4 text-left font-medium">{head[1]}</th>
					<th class="py-2 text-left font-medium">{head[2]}</th>
				</tr>
			</thead>
			<tbody>
				{#each rows as [a, b, c] (a)}
					<tr class="rule-soft border-b">
						<td class="py-3 pr-4"><code class="chip rounded-full px-2 py-0.5 text-xs">{a}</code></td>
						<td class="py-3 pr-4"
							><code class="chip rounded-full px-2 py-0.5 text-xs whitespace-nowrap">{b}</code></td
						>
						<td class="muted py-3">{c}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/snippet}

{#snippet preview(id: Theme)}
	{#if id === 'default'}
		<div class="relative h-full bg-neutral-950">
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src={sized(photos.default.hero[0].src, 480)}
				alt=""
			/>
			<div class="absolute bottom-2 left-1/2 -translate-x-1/2">
				<Stepper count={3} active={0} className="carousel-stepper" />
			</div>
		</div>
	{:else if id === 'minimal'}
		<div class="flex h-full flex-col items-center gap-2.5 bg-white p-3">
			<Stepper count={3} active={2} className="theme-minimal" />
			<div class="w-full space-y-1.5">
				<div class="h-1.5 w-3/4 rounded-full bg-neutral-100"></div>
				<div class="h-1.5 w-1/2 rounded-full bg-neutral-100"></div>
			</div>
		</div>
	{:else if id === 'hacker'}
		<div class="flex h-full flex-col justify-between bg-[#0a0a0a] p-3">
			<div class="space-y-1.5">
				<div class="h-1.5 w-3/4 rounded-full bg-[rgba(0,255,65,0.08)]"></div>
				<div class="font-mono text-[10px] leading-none text-[#00ff41]/40">$ _</div>
			</div>
			<div class="flex justify-center">
				<Stepper count={3} active={2} className="theme-hacker" />
			</div>
		</div>
	{:else if id === 'warm'}
		<div class="flex h-full items-center gap-3 bg-[#faf5f0] p-3 dark:bg-[#2a2118]">
			<div class="flex-1 space-y-1.5">
				<div class="h-1.5 w-3/4 rounded-full bg-[rgba(194,120,92,0.15)]"></div>
				<div class="h-1.5 w-1/2 rounded-full bg-[rgba(194,120,92,0.15)]"></div>
			</div>
			<Stepper count={3} active={2} orientation="vertical" className="theme-warm" />
		</div>
	{:else}
		<div class="flex h-full flex-col justify-between bg-[#f2f0e9] p-3">
			<div class="space-y-1.5">
				<div class="h-2 w-3/4 bg-black"></div>
				<div class="h-2 w-1/2 bg-black"></div>
			</div>
			<div class="flex">
				<Stepper count={3} active={2} className="theme-brutalist" />
			</div>
		</div>
	{/if}
{/snippet}

{#snippet themePicker(grid: string, cardHeight: string)}
	<div class="grid {grid}" role="radiogroup" aria-label="Page theme">
		{#each themes as t (t.id)}
			<div class="relative">
				<div
					class="card overflow-hidden rounded-2xl border-2 transition-colors"
					class:selected={theme === t.id}
				>
					<div class={cardHeight} inert>{@render preview(t.id)}</div>
					<p class="card-name px-2.5 py-1.5 text-xs">{t.label}</p>
				</div>
				<button
					class="absolute inset-0 rounded-2xl"
					role="radio"
					aria-checked={theme === t.id}
					aria-label="{t.label} theme"
					onclick={() => (theme = t.id)}
				></button>
			</div>
		{/each}
	</div>
{/snippet}

<div class="page relative min-h-screen antialiased" data-theme={theme}>
	<nav class="fixed top-16 left-8 hidden xl:block" aria-label="Sections">
		<div class="faint space-y-2 text-sm">
			{#each navLinks as [href, label] (href)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- in-page #section anchors -->
				<a {href} class="link block">{label}</a>
			{/each}
		</div>
	</nav>

	<aside class="fixed top-16 right-8 hidden w-48 xl:block">
		{@render themePicker('grid-cols-1 gap-5', 'h-20')}
	</aside>

	<!-- compact switcher for screens without room for the sidebar -->
	<div
		class="switcher fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 p-1 xl:hidden"
		role="radiogroup"
		aria-label="Page theme"
	>
		{#each themes as t (t.id)}
			<button
				class="swatch-btn flex items-center gap-1.5 px-2 py-1.5 text-xs"
				class:on={theme === t.id}
				role="radio"
				aria-checked={theme === t.id}
				aria-label="{t.label} theme"
				onclick={() => (theme = t.id)}
			>
				<span class="swatch swatch-{t.id}"></span>
				<span class="hidden sm:inline">{t.label}</span>
			</button>
		{/each}
	</div>

	<div class="mx-auto max-w-2xl px-4 pt-12 pb-28 sm:px-6 sm:pt-16 xl:pb-16">
		<h1 class="title text-3xl font-medium tracking-tight">
			{#each 'Pasito'.split('') as ch, i (i)}<span style:animation-delay="{i * 60}ms">{ch}</span
				>{/each}
		</h1>
		<p class="muted mt-4">
			A tiny, fully-themeable, and dependency-free fluid stepper component — for Svelte 5.
		</p>

		<div class="mt-10 flex flex-col items-center gap-3 sm:mt-12">
			<div class="frame relative w-full overflow-hidden rounded-2xl" style:aspect-ratio="4/3">
				{@render slides(set.hero.slice(0, heroCount), heroActive)}
				<div
					class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-4"
				>
					<button class={glassBtn} aria-label="Previous" onclick={heroPrev}>
						{@render icon('M14.5 18L8.5 12L14.5 6')}
					</button>
					<Stepper
						count={heroCount}
						active={heroActive}
						onStepClick={(i) => (heroActive = i)}
						className="carousel-stepper {themeClass}"
					/>
					<button class={glassBtn} aria-label="Next" onclick={heroNext}>
						{@render icon('M9.5 18L15.5 12L9.5 6')}
					</button>
				</div>
			</div>
			<div class="chip stepctl flex items-center overflow-hidden rounded-full">
				<button
					class="flex h-8 items-center justify-center pr-1.5 pl-3 opacity-75 transition-opacity disabled:cursor-default disabled:opacity-25"
					aria-label="Remove step"
					disabled={heroCount <= 2}
					onclick={removeStep}
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
						<path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</button>
				<button
					class="flex h-8 items-center justify-center pr-3 pl-1.5 opacity-75 transition-opacity disabled:cursor-default disabled:opacity-25"
					aria-label="Add step"
					disabled={heroCount >= set.hero.length}
					onclick={addStep}
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
						<path
							d="M12 5V19M5 12H19"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</button>
			</div>
			{@render credit(set.hero[heroActive])}
		</div>

		<section id="vertical" class="mt-20 scroll-mt-8 sm:mt-24">
			<h2 class="text-xl font-medium">Vertical</h2>
			<p class="muted mt-4">
				Set <code class="chip rounded px-1.5 py-0.5 text-sm">orientation="vertical"</code> and the
				stepper stacks top-to-bottom. Works well as a sidebar rail or alongside vertically-scrolling
				content.
			</p>
			<div
				class="frame relative mt-8 w-full overflow-hidden rounded-2xl"
				style:aspect-ratio="4/3"
			>
				{@render slides(set.vertical, verticalActive)}
				<div
					class="absolute top-1/2 left-3 z-10 flex -translate-y-1/2 flex-col items-center gap-2 sm:left-4"
				>
					<button
						class={glassBtn}
						aria-label="Previous"
						onclick={() => (verticalActive = (verticalActive - 1 + verticalCount) % verticalCount)}
					>
						{@render icon('M6 14.5L12 8.5L18 14.5')}
					</button>
					<Stepper
						count={verticalCount}
						active={verticalActive}
						onStepClick={(i) => (verticalActive = i)}
						orientation="vertical"
						className="carousel-stepper {themeClass}"
					/>
					<button
						class={glassBtn}
						aria-label="Next"
						onclick={() => (verticalActive = (verticalActive + 1) % verticalCount)}
					>
						{@render icon('M6 9.5L12 15.5L18 9.5')}
					</button>
				</div>
			</div>
			{@render credit(set.vertical[verticalActive])}
		</section>

		<section id="autoplay" class="mt-20 scroll-mt-8 sm:mt-24">
			<h2 class="text-xl font-medium">Autoplay</h2>
			<p class="muted mt-4">
				<code class="chip rounded px-1.5 py-0.5 text-sm">useAutoPlay</code> drives timed step changes
				with a visible fill animation. Pause, resume, and loop are all built in.
			</p>
			<div
				class="frame relative mt-8 w-full overflow-hidden rounded-2xl"
				style:aspect-ratio="4/3"
			>
				{@render slides(set.autoplay, autoplayActive)}
				<div
					class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 sm:bottom-4"
				>
					<Stepper
						count={autoplayCount}
						active={autoplayActive}
						onStepClick={(i) => (autoplayActive = i)}
						filling={autoplay.filling}
						fillDuration={autoplay.fillDuration}
						className="autoplay-stepper {themeClass}"
					/>
					<button
						class={glassBtn}
						aria-label={autoplay.playing ? 'Pause' : 'Play'}
						onclick={autoplay.toggle}
					>
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							{#if autoplay.playing}
								<rect x="4" y="3" width="6" height="18" rx="3" />
								<rect x="14" y="3" width="6" height="18" rx="3" />
							{:else}
								<path
									d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"
								/>
							{/if}
						</svg>
					</button>
				</div>
			</div>
			{@render credit(set.autoplay[autoplayActive])}
		</section>

		<section id="themes" class="mt-20 scroll-mt-8 sm:mt-24">
			<h2 class="text-xl font-medium">Themes</h2>
			<p class="muted mt-4">
				Every visual detail is controlled by CSS custom properties — colors, sizes, radii, spacing.
				Override a few variables to match your branding needs. Pick one to re-skin this page.
			</p>
			<div class="mt-8 xl:hidden">
				{@render themePicker('grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5', 'h-24')}
			</div>
		</section>

		<section id="installation" class="mt-20 scroll-mt-8 sm:mt-24">
			<div class="flex items-center justify-between">
				<h2 class="text-xl font-medium">Installation</h2>
				<a
					href="https://github.com/joshpuckett/pasito"
					target="_blank"
					rel="noopener noreferrer"
					class="faint link text-sm">Original</a
				>
			</div>
			{@render codeBlock(installCode)}
			<p class="muted mt-6">Or tell your agent:</p>
			<div class="surface mt-4 overflow-hidden rounded-xl">
				<p class="code p-4">{agentPrompt}</p>
			</div>
		</section>

		<section id="usage" class="mt-16 scroll-mt-8">
			<h2 class="text-xl font-medium">Usage</h2>
			{@render codeBlock(usageCode)}
		</section>

		<section class="mt-16">
			<h2 class="text-xl font-medium">Autoplay Usage</h2>
			{@render codeBlock(autoplayCode)}
		</section>

		<section id="api-reference" class="mt-16 scroll-mt-8">
			<h2 class="text-xl font-medium">API Reference</h2>
			<h3 class="mt-8 font-medium">&lt;Stepper /&gt;</h3>
			{@render table(['Prop', 'Type', 'Description'], stepperProps)}
			<h3 class="mt-10 font-medium">useAutoPlay(options)</h3>
			{@render table(['Option', 'Type', 'Description'], autoPlayOptions)}
			<h3 class="mt-10 font-medium">Returns</h3>
			{@render table(['Property', 'Type', 'Description'], autoPlayReturns)}
		</section>

		<section id="theming" class="mt-16 scroll-mt-8">
			<h2 class="text-xl font-medium">Theming</h2>
			<p class="muted mt-4">
				Override any of these on the container via <code class="chip rounded px-1.5 py-0.5 text-sm"
					>className</code
				>.
			</p>
			{@render table(['Variable', 'Default', 'Description'], themeVars)}
			<h3 class="mt-10 font-medium">Dark theme</h3>
			{@render codeBlock(darkThemeCode)}
		</section>

		<section class="mt-16">
			<h2 class="text-xl font-medium">Accessibility</h2>
			<p class="muted mt-4">
				Steps use <code class="chip rounded-full px-2 py-0.5 text-xs">role="tab"</code> with
				<code class="chip rounded-full px-2 py-0.5 text-xs">aria-selected</code>
				and an <code class="chip rounded-full px-2 py-0.5 text-xs">aria-label</code> per step. The active
				step is keyboard-focusable, and all transitions resolve instantly under
				<code class="chip rounded-full px-2 py-0.5 text-xs">prefers-reduced-motion</code>.
			</p>
		</section>

		<footer class="faint mt-24 text-sm">
			Svelte port of
			<a
				class="link underline"
				href="https://joshpuckett.me/pasito"
				target="_blank"
				rel="noopener noreferrer">Pasito</a
			>
			by
			<a
				class="link underline"
				href="https://github.com/joshpuckett"
				target="_blank"
				rel="noopener noreferrer">Josh Puckett</a
			>. Photos from
			<a class="link underline" href={unsplashUrl} target="_blank" rel="noopener noreferrer"
				>Unsplash</a
			>.
		</footer>
	</div>
</div>

<style>
	/* ---------- page tokens ---------- */
	.page {
		--bg: #ffffff;
		--fg: #171717;
		--muted: #525252;
		--faint: #8a8a8a;
		--surface: #fafaf9;
		--chip: #f5f5f4;
		--border: #e7e5e4;
		--border-soft: #f5f5f4;
		--accent: #171717;
		--ctl-bg: rgba(0, 0, 0, 0.2);
		--ctl-bg-hover: rgba(0, 0, 0, 0.3);
		--ctl-fg: #ffffff;
		--ctl-border: transparent;
		--ctl-bw: 1px;
		--ctl-shadow: none;
		--ctl-radius: 999px;
		background: var(--bg);
		color: var(--fg);
		transition:
			background-color 300ms ease,
			color 300ms ease;
	}
	@media (prefers-color-scheme: dark) {
		.page {
			--bg: #0a0a0a;
			--fg: #f5f5f5;
			--muted: #a3a3a3;
			--faint: #737373;
			--surface: #262626;
			--chip: #262626;
			--border: #404040;
			--border-soft: #262626;
			--accent: #f5f5f5;
		}
	}
	.page[data-theme='minimal'] {
		--ctl-bg: transparent;
		--ctl-bg-hover: rgba(255, 255, 255, 0.15);
		--ctl-border: rgba(255, 255, 255, 0.6);
	}
	.page[data-theme='hacker'] {
		--bg: #050805;
		--fg: #00ff41;
		--muted: rgba(0, 255, 65, 0.7);
		--faint: rgba(0, 255, 65, 0.45);
		--surface: rgba(0, 255, 65, 0.05);
		--chip: rgba(0, 255, 65, 0.08);
		--border: rgba(0, 255, 65, 0.2);
		--border-soft: rgba(0, 255, 65, 0.1);
		--accent: #00ff41;
		--ctl-bg: rgba(0, 0, 0, 0.55);
		--ctl-bg-hover: rgba(0, 255, 65, 0.18);
		--ctl-fg: #00ff41;
		--ctl-border: rgba(0, 255, 65, 0.5);
		--ctl-radius: 0px;
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
	}
	.page[data-theme='warm'] {
		--bg: #faf5f0;
		--fg: #3b2a20;
		--muted: #7a5c4a;
		--faint: #a0826e;
		--surface: #f1e4d8;
		--chip: #f1e4d8;
		--border: rgba(194, 120, 92, 0.3);
		--border-soft: rgba(194, 120, 92, 0.14);
		--accent: #c2785c;
		--ctl-bg: #c2785c;
		--ctl-bg-hover: #b06a4e;
		--ctl-fg: #faf5f0;
		--ctl-border: #b06a4e;
	}
	@media (prefers-color-scheme: dark) {
		.page[data-theme='warm'] {
			--bg: #2a2118;
			--fg: #faf5f0;
			--muted: #d6c2b2;
			--faint: #a08672;
			--surface: #3a2d21;
			--chip: #3a2d21;
			--border: rgba(194, 120, 92, 0.35);
			--border-soft: rgba(194, 120, 92, 0.16);
		}
	}
	.page[data-theme='brutalist'] {
		--bg: #f2f0e9;
		--fg: #000000;
		--muted: #1f1f1f;
		--faint: #555555;
		--surface: #ffffff;
		--chip: #ffe600;
		--border: #000000;
		--border-soft: #000000;
		--accent: #ff3b00;
		--ctl-bg: #ffe600;
		--ctl-bg-hover: #ffd000;
		--ctl-fg: #000000;
		--ctl-border: #000000;
		--ctl-bw: 2px;
		--ctl-shadow: 3px 3px 0 #000;
		--ctl-radius: 0px;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	/* ---------- semantic helpers ---------- */
	.muted {
		color: var(--muted);
	}
	.faint {
		color: var(--faint);
	}
	.link:hover {
		color: var(--fg);
	}
	.surface {
		background: var(--surface);
	}
	.chip {
		background: var(--chip);
		color: var(--fg);
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
	}
	.rule {
		border-color: var(--border);
	}
	.rule-soft {
		border-color: var(--border-soft);
	}
	.current {
		color: var(--fg);
	}
	.card {
		border-color: var(--border);
	}
	.card.selected {
		border-color: var(--accent);
	}
	.card-name {
		background: var(--surface);
		color: var(--faint);
		border-top: 1px solid var(--border);
	}
	.card.selected .card-name {
		color: var(--fg);
	}
	.frame {
		background: var(--surface);
		transition:
			border-radius 300ms ease,
			box-shadow 300ms ease;
	}

	.ctl {
		background: var(--ctl-bg);
		color: var(--ctl-fg);
		border: var(--ctl-bw) solid var(--ctl-border);
		border-radius: var(--ctl-radius);
		box-shadow: var(--ctl-shadow);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		transition:
			background-color 150ms ease,
			color 300ms ease,
			border-color 300ms ease,
			border-radius 300ms ease,
			transform 100ms ease,
			box-shadow 100ms ease;
	}
	.ctl:hover {
		background: var(--ctl-bg-hover);
	}

	/* ---------- mobile switcher ---------- */
	.switcher {
		background: color-mix(in srgb, var(--surface) 85%, transparent);
		border: 1px solid var(--border);
		border-radius: 999px;
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}
	.swatch-btn {
		border-radius: 999px;
		color: var(--faint);
		transition: background-color 150ms ease;
	}
	.swatch-btn.on {
		background: var(--chip);
		color: var(--fg);
	}
	.swatch {
		display: block;
		width: 16px;
		height: 16px;
		border-radius: 999px;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
	}
	.swatch-default {
		background: linear-gradient(135deg, #e8b9a0, #6d93ab);
	}
	.swatch-minimal {
		background: #ffffff;
	}
	.swatch-hacker {
		background: radial-gradient(circle, #00ff41 0 35%, #050805 40%);
	}
	.swatch-warm {
		background: #c2785c;
	}
	.swatch-brutalist {
		background: #ffe600;
		border-radius: 0;
		box-shadow: inset 0 0 0 2px #000;
	}

	/* ---------- theme-specific page styling ---------- */
	.page[data-theme='hacker'] .title {
		font-family: inherit;
	}
	.page[data-theme='hacker'] .code span {
		color: inherit;
	}
	.page[data-theme='hacker'] .frame {
		border-radius: 0;
		box-shadow: 0 0 0 1px rgba(0, 255, 65, 0.35);
	}
	.page[data-theme='hacker'] .card,
	.page[data-theme='hacker'] .switcher,
	.page[data-theme='hacker'] .swatch-btn {
		border-radius: 0;
	}

	.page[data-theme='brutalist'] .title,
	.page[data-theme='brutalist'] h2 {
		font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}
	.page[data-theme='brutalist'] .frame {
		border-radius: 0;
		box-shadow:
			0 0 0 2px #000,
			8px 8px 0 #000;
	}
	.page[data-theme='brutalist'] .surface {
		border-radius: 0;
		box-shadow:
			0 0 0 2px #000,
			4px 4px 0 #000;
	}
	.page[data-theme='brutalist'] .chip {
		border-radius: 0;
		box-shadow: inset 0 0 0 1px #000;
	}
	.page[data-theme='brutalist'] .stepctl {
		box-shadow:
			0 0 0 2px #000,
			3px 3px 0 2px #000;
	}
	.page[data-theme='brutalist'] .card {
		border-radius: 0;
		border-color: #000;
	}
	.page[data-theme='brutalist'] .card.selected {
		border-color: var(--accent);
		box-shadow: 4px 4px 0 #000;
	}
	.page[data-theme='brutalist'] .credit {
		margin-top: 1.25rem;
	}
	.page[data-theme='brutalist'] .ctl:active {
		transform: translate(2px, 2px);
		box-shadow: 1px 1px 0 #000;
	}
	.page[data-theme='brutalist'] .switcher,
	.page[data-theme='brutalist'] .swatch-btn {
		border-radius: 0;
	}
	.page[data-theme='brutalist'] .switcher {
		background: #fff;
		border: 2px solid #000;
		box-shadow: 4px 4px 0 #000;
	}

	/* ---------- title, slides, code ---------- */
	.title {
		font-family: 'Signifier', Georgia, serif;
	}
	.title span {
		display: inline-block;
		animation: letter-in 600ms cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}
	@keyframes letter-in {
		from {
			opacity: 0;
			filter: blur(6px);
		}
	}

	.slide {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.code {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
		font-size: 13px;
		scrollbar-width: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.title span {
			animation: none;
		}
		.page,
		.slide,
		.frame,
		.ctl {
			transition: none;
		}
	}

	/* ---------- stepper themes ---------- */
	:global(.carousel-stepper) {
		--pill-dot-size: 8px;
		--pill-active-width: 28px;
		--pill-gap: 8px;
		--pill-bg: rgba(255, 255, 255, 0.35);
		--pill-active-bg: rgba(255, 255, 255, 0.95);
		--pill-container-bg: rgba(0, 0, 0, 0.25);
		--pill-container-border: transparent;
		height: 32px;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}
	:global(.carousel-stepper.pasito-vertical) {
		height: auto;
		width: 32px;
		padding: 10px 0;
		justify-content: center;
		align-items: center;
	}
	:global(.autoplay-stepper) {
		--pill-dot-size: 8px;
		--pill-active-width: 28px;
		--pill-gap: 8px;
		--pill-bg: rgba(255, 255, 255, 0.35);
		--pill-active-bg: rgba(255, 255, 255, 0.3);
		--pill-fill-bg: white;
		--pill-container-bg: rgba(0, 0, 0, 0.25);
		--pill-container-border: transparent;
		height: 32px;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}
	:global(.theme-minimal) {
		--pill-container-bg: transparent;
		--pill-container-border: transparent;
	}
	:global(.theme-hacker) {
		--pill-active-bg: #00ff41;
		--pill-bg: rgba(0, 255, 65, 0.25);
		--pill-fill-bg: rgba(0, 255, 65, 0.3);
		--pill-container-bg: rgba(0, 0, 0, 0.55);
		--pill-container-border: rgba(0, 255, 65, 0.3);
		--pill-container-radius: 0px;
		--pill-dot-size: 5px;
		--pill-active-width: 16px;
		--pill-gap: 4px;
	}
	:global(.theme-hacker .pasito-step) {
		border-radius: 0;
	}
	:global(.theme-warm) {
		--pill-active-bg: #faf5f0;
		--pill-bg: rgba(250, 245, 240, 0.35);
		--pill-fill-bg: rgba(250, 245, 240, 0.4);
		--pill-container-bg: #c2785c;
		--pill-container-border: #b06a4e;
	}
	:global(.theme-brutalist) {
		--pill-dot-size: 8px;
		--pill-active-width: 28px;
		--pill-gap: 6px;
		--pill-bg: #000;
		--pill-active-bg: #000;
		--pill-fill-bg: #ff3b00;
		--pill-container-bg: #ffe600;
		--pill-container-border: #000;
		--pill-container-radius: 0px;
	}
	:global(.pasito-container.theme-brutalist) {
		border-width: 2px;
		box-shadow: 3px 3px 0 #000;
	}
	:global(.theme-brutalist .pasito-step) {
		border-radius: 0;
	}
	/* autoplay needs a dim active pill so the fill bar reads on top of it */
	:global(.autoplay-stepper.theme-hacker) {
		--pill-active-bg: rgba(0, 255, 65, 0.3);
		--pill-fill-bg: #00ff41;
	}
	:global(.autoplay-stepper.theme-warm) {
		--pill-active-bg: rgba(250, 245, 240, 0.35);
		--pill-fill-bg: #faf5f0;
	}
	:global(.autoplay-stepper.theme-brutalist) {
		--pill-active-bg: #000;
		--pill-fill-bg: #ff3b00;
	}
</style>
