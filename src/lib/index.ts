import { AutoPlayController } from './core/index.ts';

export { default as Stepper } from './components/Stepper.svelte';
export { AutoPlayController };

export function useAutoPlay(options: ConstructorParameters<typeof AutoPlayController>[0]) {
	return new AutoPlayController(options);
}

export type { StepperProps, AnimatingStep } from './core/types.ts';
