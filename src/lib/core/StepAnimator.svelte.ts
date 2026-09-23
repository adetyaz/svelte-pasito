import type { AnimatingStep } from './types.ts';

export class StepAnimator {
	private keyGen: number;
	steps: AnimatingStep[] = $state([]);

	hasEntering = $derived(this.steps.some((step) => step.phase === 'entering'));
	exitingCount = $derived(this.steps.filter((step) => step.phase === 'exiting').length);

	constructor(count: number) {
		this.keyGen = count;
		this.steps = Array.from({ length: count }, (_, i) => ({
			key: i,
			index: i,
			phase: 'stable' as const
		}));

		// promote entering -> stable after paint (was useLayoutEffect + rAF + rAF)
		$effect(() => {
			if (!this.hasEntering) return;
			let raf2: number;
			const raf1 = requestAnimationFrame(() => {
				raf2 = requestAnimationFrame(() => this.promoteEntering());
			});
			return () => {
				cancelAnimationFrame(raf1);
				if (raf2) cancelAnimationFrame(raf2);
			};
		});

		// drop exiting steps once their transition has had time to finish
		$effect(() => {
			if (this.exitingCount === 0) return;
			const timer = setTimeout(() => this.removeExiting(), 300);
			return () => clearTimeout(timer);
		});
	}

	reconcile(newCount: number): void {
		const liveCount = this.steps.filter((step) => step.phase !== 'exiting').length;
		if (liveCount === newCount) return;

		if (newCount < liveCount) {
			let seen = 0;
			this.steps = this.steps.map((step) => {
				if (step.phase === 'exiting') return step;
				seen++;
				if (seen > newCount)
					return {
						...step,
						phase: 'exiting' as const
					};
				return step;
			});
		}

		if (newCount > liveCount) {
			for (let i = liveCount; i < newCount; i++) {
				this.keyGen++;
				this.steps.push({
					key: this.keyGen,
					index: i,
					phase: 'entering' as const
				});
			}
		}

		let index = 0;
		this.steps = this.steps.map((step) =>
			step.phase === 'exiting' ? step : { ...step, index: index++ }
		);
	}

	private promoteEntering(): void {
		this.steps = this.steps.map((step) =>
			step.phase === 'entering' ? { ...step, phase: 'stable' as const } : step
		);
	}

	private removeExiting(): void {
		this.steps = this.steps.filter((step) => step.phase !== 'exiting');
	}
}
