<script lang="ts">
	import { untrack } from 'svelte';
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
		fillDuration
	}: StepperProps = $props();

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
	class={containerClass}
	role="tablist"
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
