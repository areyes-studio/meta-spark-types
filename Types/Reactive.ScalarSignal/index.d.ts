/// <reference path="../number/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../this/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Array/index.d.ts" />
/// <reference path="../Reactive.ScalarSignalHistory/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../ConstScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../string/index.d.ts" />
declare interface ScalarSignal {
/** 
* ```
(get) lastValue: number
(set) (Not Available)
```

Specifies a number that represents the last value of the signal.

**Note**: The signal value is updated during simulation tick. This means that the value of `lastValue` is undefined before its first update. It is also undefined for signals that aren't used for any bindings/subscriptions, because those signals aren't guaranteed to be updated at each simulation tick.
*/ 
lastValue: number;
/** 
*  
 * lt(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **less than** the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.lt`
 */lt(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * ceil(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.ceil`
 */ceil(): ScalarSignal
 ;

/** 
*  
 * eq(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.
 * 
 * **See Also**: `ReactiveModule.eq`
 */eq(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * delayBy(timeSpan: {milliseconds: number}): this
 *  
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */delayBy(timeSpan: {milliseconds: number}): this
 ;

/** 
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */fromRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * magnitude(): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */magnitude(): ScalarSignal
 ;

/** 
*  
 * schmittTrigger(config: { low: number, high: number, initialValue: ?boolean}): BoolSignal
 *  
 * 
 * Returns a Boolean signal that is `true` when the input is strictly greater than the upper threshold, and `false` when it is strictly less than the lower threshold.
 * For input values between and including the thresholds, the Shmitt trigger returns the same value as at the previous update, or **initialValue** if this is the first update.
 * 
 * **Note**: The initialValue is assumed to be `false` if it isn't specified.
 */schmittTrigger(config: { low: number, high: number, initialValue: ?boolean}): BoolSignal
 ;

/** 
*  
 * ne(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.
 * 
 * **See Also**: `ReactiveModule.ne`
 */ne(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * gt(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **greater than** the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.gt`
 */gt(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * cross(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * 
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */cross(other: VectorSignal): VectorSignal
 ;

/** 
*  
 * expSmooth(dampFactor: number): ScalarSignal
 *  
 * 
 * Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
 * 
 * **Note**: See also `ReactiveModule.expSmooth`.
 */expSmooth(dampFactor: number): ScalarSignal
 ;

/** 
*  
 * ge(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **greater than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.ge`
 */ge(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * pin(): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing a constant value which is the value of the specified signal immediately after `pin` is called.
 */pin(): ScalarSignal
 ;

/** 
*  
 * le(other: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **less than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.le`
 */le(other: ScalarSignal | number): BoolSignal
 ;

/** 
*  
 * mod(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.mod`
 */mod(other: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * history(framesCount: number): ScalarSignalHistory
 * history(framesCount: number, initialValues: Array<number>): ScalarSignalHistory
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */history(framesCount: number): ScalarSignalHistory
 ;

history(framesCount: number, initialValues: Array<number>): ScalarSignalHistory
 ;

/** 
*  
 * multiTrigger(threshold: number): EventSource
 *  
 * 
 * Returns an `EventSource` that fires **every time** the signal raises to (becomes greater than or equal after being less than) the value of `threshold`.
 * 
 * The emitted event (the argument passed to the callback function) has the value of `threshold`.
 * 
 * **Note**: The initial value of the signal is assumed to be 0.0.
 * 
 * **See Also**: `ReactiveModule.trigger`, `ReactiveModule.interval`.
 */multiTrigger(threshold: number): EventSource
 ;

/** 
*  
 * sqrt(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.sqrt`
 */sqrt(): ScalarSignal
 ;

/** 
* 
 *  
 * monitor(): EventSource
 * monitor(config: { fireOnInitialValue: ?boolean}): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an event every time the value of the input signal changes. The event contains a JSON object with the old and new values in the format:
 * 
 *  
 * { "oldValue": val, "newValue": val }
 *  
 * 
 * **Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
 * 
 */monitor(): EventSource
 ;

monitor(config: { fireOnInitialValue: ?boolean}): EventSource
 ;

/** 
*  
 * abs(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * 
 * **See Also**: `ReactiveModule.abs`
 */abs(): ScalarSignal
 ;

/** 
*  
 * floor(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.floor`
 */floor(): ScalarSignal
 ;

/** 
*  
 * pinLastValue(): ConstScalarSignal
 *  
 * 
 * Returns a `ConstScalarSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstScalarSignal can be passed to a functions which accept numbers.
 */pinLastValue(): ConstScalarSignal
 ;

/** 
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */smoothStep(x: ScalarSignal | number, edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * dot(other: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * 
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */dot(other: VectorSignal): ScalarSignal
 ;

/** 
*  
 * sign(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * 
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ReactiveModule.sign`
 */sign(): ScalarSignal
 ;

/** 
*  
 * toString(): StringSignal
 *  
 * 
 * Converts a `ScalarSignal` to a `StringSignal` according to the default string formatting rules.
 * 
 * **Note**: `ScalarSignal.format` allows more flexible control over the way the number is converted to string.
 */toString(): StringSignal
 ;

/** 
*  
 * add(other: ScalarSignal): ScalarSignal
 * add(other: VectorSignal): PointSignal
 * add(other: VectorSignal): VectorSignal
 * add(other: PointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ScalarSignal.sum`, `ReactiveModule.add`
 */add(other: ScalarSignal | number): ScalarSignal
 ;

add(other: VectorSignal): PointSignal
 ;

add(other: VectorSignal): VectorSignal
 ;

add(other: PointSignal): PointSignal
 ;

/** 
*  
 * sum(other: ScalarSignal): ScalarSignal
 * sum(other: VectorSignal): PointSignal
 * sum(other: VectorSignal): VectorSignal
 * sum(other: PointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ScalarSignal.sum`, `ReactiveModule.add`
 */sum(other: ScalarSignal | number): ScalarSignal
 ;

sum(other: VectorSignal): PointSignal
 ;

sum(other: VectorSignal): VectorSignal
 ;

sum(other: PointSignal): PointSignal
 ;

/** 
*  
 * sub(other: ScalarSignal): ScalarSignal
 * sub(other: PointSignal): VectorSignal
 * sub(other: VectorSignal): PointSignal
 * sub(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * 
 * **See Also**: `ReactiveModule.sub`, `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */sub(other: ScalarSignal | number): ScalarSignal
 ;

sub(other: PointSignal): VectorSignal
 ;

sub(other: VectorSignal): PointSignal
 ;

sub(other: VectorSignal): VectorSignal
 ;

/** 
*  
 * div(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.div`
 */div(other: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * reflect(normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */reflect(normal: VectorSignal): VectorSignal
 ;

/** 
*  
 * neg(): ScalarSignal
 * neg(): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * 
 * **See Also**: `ReactiveModule.neg`, `ScalarSignal.neg`, `VectorSignal.neg`
 */neg(): ScalarSignal
 ;

neg(): VectorSignal
 ;

/** 
*  
 * interval(threshold: number): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an event whenever the supplied `ScalarSignal` first passes (becomes greater than or equal) a value of `N*threshold`, N = 1, 2, 3, ... Events are signaled in increasing order of N, starting from 1, with no omissions. For each value of N, the respective event is fired only once.
 * 
 * The emitted event (the argument passed to the callback function) has the value of corresponding `N*threshold`.
 * 
 * **Note**: The threshold must be a positive number.
 * 
 * **Note**: `interval` is mostly useful for non-negative non-decreasing scalar signals.
 * 
 * **See Also**: `ReactiveModule.trigger`, `ReactiveModule.multiTrigger`.
 */interval(threshold: number): EventSource
 ;

/** 
*  
 * min(other: ScalarSignal): ScalarSignal
 * min(other: ScalarSignal): Point2DSignal
 * min(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the component-wise values that are the lesser of the values of the given signals.
 */min(other: ScalarSignal | number): ScalarSignal
 ;

min(other: ScalarSignal | number): Point2DSignal
 ;

min(other: ScalarSignal | number): VectorSignal
 ;

/** 
*  
 * pow(exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal. The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ReactiveModule.pow`
 */pow(exponent: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * mul(other: ScalarSignal): ScalarSignal
 * mul(other: VectorSignal): VectorSignal
 * mul(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * 
 * **See Also**: `ReactiveModule.mul`, `ScalarSignal.mul`, `VectorSignal.mul`
 */mul(other: ScalarSignal | number): ScalarSignal
 ;

mul(other: VectorSignal): VectorSignal
 ;

mul(other: ScalarSignal | number): VectorSignal
 ;

/** 
*  
 * atan2(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * 
 * **See Also**: `ReactiveModule.atan2`
 */atan2(other: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * clamp(min: ScalarSignal, max: ScalarSignal): ScalarSignal
 * clamp(min: ScalarSignal, max: ScalarSignal): Point2DSignal
 * clamp(min: ScalarSignal, max: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
 * 
 * **Note**: The behavior is undefined if `min` is greater than `max`.
 */clamp(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal
 ;

clamp(min: ScalarSignal | number, max: ScalarSignal | number): Point2DSignal
 ;

clamp(min: ScalarSignal | number, max: ScalarSignal | number): VectorSignal
 ;

/** 
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */toRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * max(other: ScalarSignal): ScalarSignal
 * max(other: ScalarSignal): Point2DSignal
 * max(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the component-wise values that are the greater of the values of the given signals.
 */max(other: ScalarSignal | number): ScalarSignal
 ;

max(other: ScalarSignal | number): Point2DSignal
 ;

max(other: ScalarSignal | number): VectorSignal
 ;

/** 
*  
 * mix(signal: ScalarSignal, factor: ScalarSignal): ScalarSignal
 * mix(signal: Point2DSignal, factor: ScalarSignal): Point2DSignal
 * mix(signal: PointSignal, factor: ScalarSignal): PointSignal
 * mix(signal: VectorSignal, factor: ScalarSignal): VectorSignal
 * mix(signal: Point4DSignal, factor: ScalarSignal): Point4DSignal
 * mix(signal: TransformSignal, factor: ScalarSignal): TransformSignal
 *  
 * Returns a signal with the value that is the linear interpolation between this and another `signal` by a given `factor`.
 */mix(signal: ScalarSignal | number, factor: ScalarSignal | number): ScalarSignal
 ;

mix(signal: Point2DSignal, factor: ScalarSignal | number): Point2DSignal
 ;

mix(signal: PointSignal, factor: ScalarSignal | number): PointSignal
 ;

mix(signal: VectorSignal, factor: ScalarSignal | number): VectorSignal
 ;

mix(signal: Point4DSignal, factor: ScalarSignal | number): Point4DSignal
 ;

mix(signal: TransformSignal, factor: ScalarSignal | number): TransformSignal
 ;

/** 
*  
 * round(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * 
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ReactiveModule.round`
 */round(): ScalarSignal
 ;

/** 
*  
 * format(formatString: string): StringSignal
 *  
 * 
 * Converts a `ScalarSignal` to a `StringSignal` according to the supplied formatting string.
 * 
 * **Note**: `formatString` shall conform to the Folly formatting rules as specified here: https://github.com/facebook/folly/blob/master/folly/docs/Format.md#format-string-syntax .
 * 
 * **See Also**: `ScalarSignal.toString`.
 */format(formatString: string): StringSignal
 ;

/** 
*  
 * magnitudeSquared(): ScalarSignal
 *  
 * 
 * Returns the squared length (magnitude) of a given signal.
 * 
 * Calculating the squared magnitude instead of the magnitude is much faster.
 * Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
 */magnitudeSquared(): ScalarSignal
 ;

/** 
*  
 * normalize(): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */normalize(): VectorSignal
 ;

/** 
*  
 * trigger(threshold: number): EventSource
 *  
 * 
 * Returns an `EventSource` that fires **the first time** the value of the signal raises (becomes greater than or equal) to the level of `threshold`. No more than one event is ever emitted by this `EventSource`.
 * 
 * The emitted event (the argument passed to the callback function) has the value of `threshold`.
 * 
 * **Note**: for positive thresholds, `trigger` is equivalent to `interval(threshold).take(1)`.
 * 
 * **See Also**: `ReactiveModule.multiTrigger`, `ReactiveModule.interval`.
 */trigger(threshold: number): EventSource
 ;

/** 
*  
 * distance(other: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */distance(other: PointSignal): ScalarSignal
 ;

} 
