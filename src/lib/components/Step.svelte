<script lang="ts">
	import type { StepProps } from '../core/types.ts';

	let { index, isActive, phase, transitionDuration, filling, fillDuration, onclick }: StepProps =
		$props();

	const classNames = $derived(
		[
			'pasito-step',
			isActive && 'pasito-step-active',
			isActive && filling && 'pasito-step-filling',
			phase === 'entering' && 'pasito-entering',
			phase === 'exiting' && 'pasito-exiting'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<button
	class={classNames}
	style:--pill-duration={`${transitionDuration}ms`}
	style:--pill-fill-duration={isActive && filling && fillDuration ? `${fillDuration}ms` : undefined}
	{onclick}
	role="tab"
	aria-selected={isActive}
	aria-label={`Step ${index + 1}`}
	tabindex={isActive ? 0 : -1}
></button>
