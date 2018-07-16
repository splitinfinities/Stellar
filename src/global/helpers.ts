import Easing from 'easing';

export const blurringEase = (cb: Function, timing: number = 320, curve: string = "quadratic", options?: {}) => {
	const args = { ...options, ...{ duration: timing, endToEnd: true, invert: false }}
	const blurEvent = Easing.event(60, curve, args);
	blurEvent.on('data', cb)
}
