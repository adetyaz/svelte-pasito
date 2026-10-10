<script lang="ts">
	import { tick, untrack } from 'svelte';
	import type { StepperProps } from '../core/types.ts';
	import { computeStepWindow, StepAnimator } from '../core/index.ts';
	import Step from './Step.svelte';
	import '../styles/Stepper.css';

	let {
		count,
		active,
		onStepClick,
		orientation = 'horizontal',
		maxVisible,
		transitionDuration = 500,
		easing,
		className,
		filling,
		fillDuration,
		onfocusin,
		onfocusout
	}: StepperProps = $props();

	let container: HTMLDivElement;

	async function onkeydown(event: KeyboardEvent) {
		if (!onStepClick || count === 0) return;

		const vertical = orientation === 'vertical';
		let next: number;
		switch (event.key) {
			case vertical ? 'ArrowUp' : 'ArrowLeft':
				next = (active - 1 + count) % count;
				break;
			case vertical ? 'ArrowDown' : 'ArrowRight':
				next = (active + 1) % count;
				break;
			case 'Home':
				next = 0;
				break;
			case 'End':
				next = count - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		onStepClick(next);
		await tick();
		container.querySelector<HTMLElement>(`[data-step-index="${next}"]`)?.focus();
	}

	const animator = new StepAnimator(untrack(() => count));
	$effect(() => {
		animator.reconcile(count);
	});

	const { transformValue, containerSize } = $derived(
		computeStepWindow(count, active, maxVisible, orientation)
	);

	const containerClass = $derived(
		['pasito-container', orientation === 'vertical' && 'pasito-vertical', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div
	bind:this={container}
	class={containerClass}
	role="tablist"
	tabindex="-1"
	{onkeydown}
	{onfocusin}
	{onfocusout}
	aria-label="Progress steps"
	style:--pill-duration={`${transitionDuration}ms`}
	style:--pill-easing={easing || null}
	style:width={orientation === 'horizontal' && containerSize != null ? `${containerSize}px` : null}
	style:height={orientation === 'vertical' && containerSize != null ? `${containerSize}px` : null}
>
	<div class="pasito-track" style:transform={transformValue}>
		{#each animator.steps as step (step.key)}
			<Step
				index={step.index}
				isActive={step.index === active}
				phase={step.phase}
				{transitionDuration}
				filling={step.index === active && filling}
				{fillDuration}
				onclick={onStepClick ? () => onStepClick(step.index) : undefined}
			/>
		{/each}
	</div>
</div>
