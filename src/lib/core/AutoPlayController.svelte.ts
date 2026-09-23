export class AutoPlayController {
	playing = $state(false);

	private getCount: () => number;
	private getActive: () => number;
	private getStepDuration: () => number = () => 3000;
	private getLoop: () => boolean = () => true;
	private getEnabled: () => boolean = () => true;
	private onStepChange: (index: number) => void;

	filling = $derived(this.playing && this.getEnabled());
	fillDuration = $derived(this.getStepDuration());

	constructor(options: {
		count: () => number;
		active: () => number;
		onStepChange: (index: number) => void;
		stepDuration?: () => number;
		loop?: () => boolean;
		enabled?: () => boolean;
	}) {
		this.getCount = options.count;
		this.getActive = options.active;
		this.onStepChange = options.onStepChange;
		if (options.stepDuration) this.getStepDuration = options.stepDuration;
		if (options.loop) this.getLoop = options.loop;
		if (options.enabled) this.getEnabled = options.enabled;

		$effect(() => {
			if (!this.getEnabled()) this.playing = false;
		});

		$effect(() => {
			if (!this.playing || !this.getEnabled()) return;

			// read synchronously so the effect re-runs (and restarts the timer) on every step change
			const active = this.getActive();
			const count = this.getCount();

			const timer = setTimeout(() => {
				const next = this.computeNext(active, count);
				if (next !== null) {
					this.onStepChange(next);
				} else {
					this.playing = false;
				}
			}, this.getStepDuration());

			return () => clearTimeout(timer);
		});
	}

	toggle = (): void => {
		this.playing = !this.playing;
	};

	computeNext(active: number, count: number): number | null {
		return active < count - 1 ? active + 1 : this.getLoop() ? 0 : null;
	}
}
