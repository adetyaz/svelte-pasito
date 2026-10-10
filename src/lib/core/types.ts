export interface StepperProps {
	/** Total number of steps */
	count: number;
	/** Zero-based active step index */
	active: number;
	/** Optional click handler */
	onStepClick?: (index: number) => void;
	/** Layout direction */
	orientation?: 'horizontal' | 'vertical';
	/** Max visible steps (enables windowing) */
	maxVisible?: number;
	/** Transition duration in ms */
	transitionDuration?: number;
	/** CSS transition timing function */
	easing?: string;
	/** Additional CSS class for overrides */
	className?: string;
	/** Whether the active step is filling (autoplay mode) */
	filling?: boolean;
	/** Duration of the fill animation in ms */
	fillDuration?: number;
	/** Fires when focus enters the stepper; pass `autoplay.handleFocusIn` to pause autoplay */
	onfocusin?: (event: FocusEvent) => void;
	/** Fires when focus leaves a step; pass `autoplay.handleFocusOut` to resume autoplay */
	onfocusout?: (event: FocusEvent) => void;
}

export interface StepProps {
	index: number;
	isActive: boolean;
	phase: 'entering' | 'stable' | 'exiting';
	transitionDuration: number;
	filling?: boolean;
	fillDuration?: number;
	onclick?: () => void;
}

export interface AnimatingStep {
	key: number;
	index: number;
	phase: 'entering' | 'stable' | 'exiting';
}
