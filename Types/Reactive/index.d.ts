/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.EventSourceHistory/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare namespace ReactiveModule {
/**
*  
 * HSVA(h: ScalarSignal, s: ScalarSignal, v: ScalarSignal, a: ScalarSignal): HsvaSignal
 *  
 * 
 * Combines four signals and returns the result as an `HsvaSignal`. Each value should be in the range between 0.0 and 1.0.
 * **Note**: Hue value is also specified in the range between 0.0 and 1.0.
 */
function HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal;

/**
*  
 * RGBA(r: ScalarSignal, g: ScalarSignal, b: ScalarSignal, a: ScalarSignal): RgbaSignal
 *  
 * 
 * Combines four signals and returns the result as an `RgbaSignal`. Each value should be in the range between 0.0 and 1.0.
 * **Note**: RGB components are interpreted in sRGB space.
 */
function RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal;

/**
*  
 * abs(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * **See Also**: `ScalarSignal.abs`
 */
function abs(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * acos(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse cosine of the value of the given signal (interpreted as radians).
 */
function acos(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * add(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * add(x: PointSignal, y: VectorSignal): PointSignal
 * add(x: VectorSignal, y: PointSignal): PointSignal
 * add(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
function add(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

function add(x: PointSignal, y: VectorSignal): PointSignal;

function add(x: VectorSignal, y: PointSignal): PointSignal;

function add(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * and(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical conjunction of the values of the given signals. It is `true` every time both input signals are `true` and `false` at all other times.
 * **See Also**: `BoolSignal.and`
 */
function and(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * andList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical and of the values in an array
 */
function andList(x: Array<BoolSignal>): BoolSignal;

/**
*  
 * antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal
 *  
 * 
 * Returns a signal that estimates the anti derivative of the given signal with respect to time (measured in milliseconds).
 * **Note**: Since the antiderivative is inherently unbound the min/max parameters must be provided to prevent overflow. when `overflowBehaviour` is CLAMP the output is clamped at the min/max. When `overflowBehaviour` is WRAP the output is wrapped. This is useful when the output represents something that is cyclic like an angle in this case min might be 0, max might be 2*PI.
 */
function antiderivative(signal: ScalarSignal | number, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal;

/**
*  
 * asin(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse sine of the value of the given signal (interpreted as radians).
 */
function asin(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * atan(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse tangent of the value of the given signal (interpreted as radians).
 */
function atan(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * atan2(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * **See Also**: `ScalarSignal.atan2`
 */
function atan2(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * ceil(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.ceil`
 */
function ceil(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * clamp(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
 * **Note**: The behavior is undefined if `min` is greater than `max`.
 */
function clamp(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * concat(lhs: StringSignal, rhs: StringSignal): StringSignal
 *  
 * 
 * Returns a `StringSignal` containing the concatenation of the values specified by the input signals.
 * **See Also**: `StringSignal.concat`
 */
function concat(lhs: StringSignal | string, rhs: StringSignal | string): StringSignal;

/**
*  
 * cos(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the cosine of the value of the given signal (interpreted as radians).
 */
function cos(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * cross(v1: VectorSignal, v2: VectorSignal): VectorSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
function cross(v1: VectorSignal, v2: VectorSignal): VectorSignal;

/**
*  
 * derivative(signal: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal that estimates the derivative of the given signal with respect to time (measured in milliseconds).
 * **Note**: the value of the derivative at the initial point of time is always set to zero.
 * **Note**: the returned signal might be noisy for certain types of input signals, especially those received from the face tracking. It is recommended to pass the input signal to `expSmooth` first with a damping constant in the range between 100 and 500.
 */
function derivative(signal: ScalarSignal | number): ScalarSignal;

/**
*  
 * distance(v1: PointSignal, v2: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */
function distance(v1: PointSignal, v2: PointSignal): ScalarSignal;

/**
*  
 * div(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * **See Also**: `ScalarSignal.div`
 */
function div(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
function dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal;

/**
*  
 * eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 * eq(lhs: StringSignal, rhs: StringSignal): BoolSignal
 * eq(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * **Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.
 * 
 * **See Also**: `ScalarSignal.eq`, `StringSignal.eq`, `BoolSignal.eq`
 */
function eq(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

function eq(lhs: StringSignal | string, rhs: StringSignal | string): BoolSignal;

function eq(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * exp(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is e (the Euler's constant 2.718...) to the power of the value of the given signal.
 */
function exp(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal
 * expSmooth(signal: PointSignal, dampFactor: number): PointSignal
 * expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal
 * expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal
 *  
 * 
 * Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
 * **Note**: See also `ScalarSignal.expSmooth`, `PointSignal.expSmooth`, `VectorSignal.expSmooth`, `TransformSignal.expSmooth`.
 * **Note**: The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to be a rigid body transformation. The rotation component is smoothed in spherical coordinates using Slerp (spherical linear interpolation).
 */
function expSmooth(signal: ScalarSignal | number, dampFactor: number): ScalarSignal;

function expSmooth(signal: PointSignal, dampFactor: number): PointSignal;

function expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal;

function expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal;

/**
*  
 * floor(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.floor`
 */
function floor(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */
function fromRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **greater than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * **See Also**: `ScalarSignal.ge`
 */
function ge(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **greater than** the value of the right-hand-side one, and the value of `false` all other time.
 * **See Also**: `ScalarSignal.gt`
 */
function gt(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **less than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * **See Also**: `ScalarSignal.le`
 */
function le(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * log(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the natural logarithm of the value of the given signal.
 */
function log(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal
 *  
 * 
 * Creates a scene object transform with rotation in direction of target.
 * Default `eyeUp` is `ReactiveModule.vector(0, 1, 0)`.
 * **Note:** The eyeTransform needs to be pointing the scene object alongside the X axis.
 */
function lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal;

/**
*  
 * lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **less than** the value of the right-hand-side one, and the value of `false` all other time.
 * **See Also**: `ScalarSignal.lt`
 */
function lt(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * magnitude(v: VectorSignal): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */
function magnitude(v: VectorSignal): ScalarSignal;

/**
*  
 * magnitudeSquared(signal: ScalarSignal): ScalarSignal
 * magnitudeSquared(signal: Point2DSignal): ScalarSignal
 * magnitudeSquared(signal: VectorSignal): ScalarSignal
 * magnitudeSquared(signal: Point4DSignal): ScalarSignal
 *  
 * 
 * Returns the squared length (magnitude) of a given signal.
 * Calculating the squared magnitude instead of the magnitude is much faster.
 * Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
 */
function magnitudeSquared(signal: ScalarSignal | number): ScalarSignal;

function magnitudeSquared(signal: Point2DSignal): ScalarSignal;

function magnitudeSquared(signal: VectorSignal): ScalarSignal;

function magnitudeSquared(signal: Point4DSignal): ScalarSignal;

/**
*  
 * max(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the greater of the values of the given signals.
 */
function max(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * min(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the lesser of the values of the given signals.
 */
function min(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * mix(x: ScalarSignal, y: ScalarSignal, alpha: ScalarSignal): ScalarSignal
 * mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal): PointSignal
 * mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal): VectorSignal
 * mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal): TransformSignal
 *  
 * 
 * Returns a signal with the value that is the interpolation of the values of the given signals.
 */
function mix(x: ScalarSignal | number, y: ScalarSignal | number, alpha: ScalarSignal | number): ScalarSignal;

function mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal | number): PointSignal;

function mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal | number): VectorSignal;

function mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal | number): TransformSignal;

/**
*  
 * mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * **See Also**: `ScalarSignal.mod`
 */
function mod(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>
 *  
 * 
 * Returns an `EventSource` that emits an event every time when any value of the input signals change. The event contains a JSON object with the old and new values in the format:
 *  
 * { "oldValues": oldValues, "newValues": newValues }
 *  
 * 
 * where `oldValues` and `newValues` are the JSON objects where keys are the names of the signals and values are old or new values of that signals correspondingly.
 * 
 * **Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValues` is unset for this initial event.
 * 
 * **See Also**: `ReactiveModule.monitor`
 */
function monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>;

/**
*  
 * mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * mul(x: VectorSignal, y: ScalarSignal): VectorSignal
 * mul(x: ScalarSignal, y: VectorSignal): VectorSignal
 * mul(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * **See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
 */
function mul(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

function mul(x: VectorSignal, y: ScalarSignal | number): VectorSignal;

function mul(x: ScalarSignal | number, y: VectorSignal): VectorSignal;

function mul(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * mulList(x: Array<number>): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values in an array
 */
function mulList(x: Array<number>): ScalarSignal;

/**
*  
 * ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 * ne(lhs: StringSignal, rhs: StringSignal): BoolSignal
 * ne(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * **Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.
 * 
 * **See Also**: `ScalarSignal.ne`, `StringSignal.ne`, `BoolSignal.ne`
 */
function ne(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

function ne(lhs: StringSignal | string, rhs: StringSignal | string): BoolSignal;

function ne(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * neg(x: ScalarSignal): ScalarSignal
 * neg(x: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * **See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
 */
function neg(x: ScalarSignal | number): ScalarSignal;

function neg(x: VectorSignal): VectorSignal;

/**
*  
 * normalize(v: VectorSignal): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */
function normalize(v: VectorSignal): VectorSignal;

/**
*  
 * not(signal: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the logically negated value of the given signal.
 * **See Also**: `BoolSignal.not`
 */
function not(signal: BoolSignal | boolean): BoolSignal;

/**
*  
 * once(): EventSource<void>
 *  
 * 
 * Returns an `EventSource` that emits exactly one empty event as soon as possible.
 */
function once(): EventSource<void>;

/**
*  
 * or(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical disjunction of the values of the given signals. It is `true` every time at least one of the input signals is `true` and `false` at all other times.
 * **See Also**: `BoolSignal.or`
 */
function or(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * orList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical or of the values in an array
 */
function orList(x: Array<BoolSignal>): BoolSignal;

/**
*  
 * pack2(x: ScalarSignal, y: ScalarSignal): Point2DSignal
 * pack2(x: ScalarSignal, y: Point2DSignal): PointSignal
 * pack2(x: Point2DSignal, y: ScalarSignal): PointSignal
 * pack2(x: ScalarSignal, y: PointSignal): Point4DSignal
 * pack2(x: PointSignal, y: ScalarSignal): Point4DSignal
 * pack2(x: Point2DSignal, y: Point2DSignal): Point4DSignal
 *  
 * 
 * Packs two Scalar or Point signals into a bigger Point signal.
 */
function pack2(x: ScalarSignal | number, y: ScalarSignal | number): Point2DSignal;

function pack2(x: ScalarSignal | number, y: Point2DSignal): PointSignal;

function pack2(x: Point2DSignal, y: ScalarSignal | number): PointSignal;

function pack2(x: ScalarSignal | number, y: PointSignal): Point4DSignal;

function pack2(x: PointSignal, y: ScalarSignal | number): Point4DSignal;

function pack2(x: Point2DSignal, y: Point2DSignal): Point4DSignal;

/**
*  
 * pack3(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
 * pack3(x: ScalarSignal, y: ScalarSignal, z: Point2DSignal): Point4DSignal
 * pack3(x: ScalarSignal, y: Point2DSignal, z: ScalarSignal): Point4DSignal
 * pack3(x: Point2DSignal, y: ScalarSignal, z: ScalarSignal): Point4DSignal
 *  
 * 
 * Packs three Scalar or Point signals into a bigger Point signal.
 */
function pack3(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

function pack3(x: ScalarSignal | number, y: ScalarSignal | number, z: Point2DSignal): Point4DSignal;

function pack3(x: ScalarSignal | number, y: Point2DSignal, z: ScalarSignal | number): Point4DSignal;

function pack3(x: Point2DSignal, y: ScalarSignal | number, z: ScalarSignal | number): Point4DSignal;

/**
*  
 * pack4(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal, w: ScalarSignal): Point4DSignal
 *  
 * 
 * Packs four `ScalarSignals` into a `Point4DSignal`.
 */
function pack4(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number, w: ScalarSignal | number): Point4DSignal;

/**
*  
 * point(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
 *  
 * 
 * Combines three signals and returns the result as a `PointSignal`.
 */
function point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

/**
*  
 * point2d(x: ScalarSignal, y: ScalarSignal): Point2DSignal
 *  
 * 
 * Combines two signals and returns the result as a `Point2DSignal`.
 */
function point2d(x: ScalarSignal | number, y: ScalarSignal | number): Point2DSignal;

/**
*  
 * pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal.
 * The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ScalarSignal.pow`
 */
function pow(base: ScalarSignal | number, exponent: ScalarSignal | number): ScalarSignal;

/**
*  
 * quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
 *  
 * 
 * Construct a new quaternion signal with w, x, y, z components.
 */
function quaternion(w: ScalarSignal | number, x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): QuaternionSignal;

/**
*  
 * quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal
 *  
 * 
 * Construct a new quaternion from an angle and normalized axis.
 */
function quaternionFromAngleAxis(angle: ScalarSignal | number, axis: VectorSignal): QuaternionSignal;

/**
*  
 * quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
 *  
 * 
 * Construct a new quaternion signal from euler angles, representing pitch, yaw, roll respectively.
 */
function quaternionFromEuler(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): QuaternionSignal;

/**
*  
 * quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal
 *  
 * 
 * Construct a new quaternion signal that represents required rotation to rotate vector `from` to vector `to`.
 */
function quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal;

/**
*  
 * quaternionIdentity(): QuaternionSignal
 *  
 * 
 * Construct a new quaternion signal that represents an identity quaternion.
 */
function quaternionIdentity(): QuaternionSignal;

/**
*  
 * quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal
 *  
 * 
 * Creates a new quaternion signal representing rotation in the direction of target.
 * Default selfUp is ReactiveModule.vector(0, 1, 0).
 */
function quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal;

/**
*  
 * reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */
function reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal;

/**
*  
 * rotation(w: number, x: number, y: number, z: number): Rotation
 *  
 * 
 * Creates 'Rotation' from quaternion components
 */
function rotation(w: number, x: number, y: number, z: number): Rotation;

/**
*  
 * round(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ScalarSignal.round`
 */
function round(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * scale(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
 *  
 * 
 * Combines three signals and returns the result as a `PointSignal`.
 */
function scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

/**
*  
 * schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal
 *  
 * 
 * Returns a Boolean signal that is `true` when the input is strictly greater than the upper threshold, and `false` when it is strictly less than the lower threshold.
 * For input values between and including the thresholds, the Shmitt trigger returns the same value as at the previous update, or **initialValue** if this is the first update.
 * **Note**: The initialValue is assumed to be `false` if it isn't specified.
 */
function schmittTrigger(signal: ScalarSignal | number, config: {high: number, initialValue?: false | true, low: number}): BoolSignal;

/**
*  
 * sign(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ScalarSignal.sign`
 */
function sign(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * signalHistory(source: EventSource<>, count: number): EventSourceHistory<>
 * signalHistory(signal: Signal<>, count: number, initialValues?: Array<>): SignalHistory<>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via framesCount parameter.
 * Historical signal values are going to be initialized with signal value at call time or using initialValues if provided.
 */
function signalHistory(source: EventSource<>, count: number): EventSourceHistory<>;

function signalHistory(signal: Signal<>, count: number, initialValues?: Array<>): SignalHistory<>;

/**
*  
 * sin(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sine of the value of the given signal (interpreted as radians).
 */
function sin(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */
function smoothStep(x: ScalarSignal | number, edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal;

/**
*  
 * sqrt(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * **See Also**: `ScalarSignal.sqrt`
 */
function sqrt(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * step(x: ScalarSignal, edge: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge, and 1.0 is returned otherwise.
 */
function step(x: ScalarSignal | number, edge: ScalarSignal | number): ScalarSignal;

/**
*  
 * sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sub(x: PointSignal, y: VectorSignal): PointSignal
 * sub(x: VectorSignal, y: VectorSignal): VectorSignal
 * sub(x: PointSignal, y: PointSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * **See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */
function sub(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

function sub(x: PointSignal, y: VectorSignal): PointSignal;

function sub(x: VectorSignal, y: VectorSignal): VectorSignal;

function sub(x: PointSignal, y: PointSignal): VectorSignal;

/**
*  
 * sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sum(x: PointSignal, y: VectorSignal): PointSignal
 * sum(x: VectorSignal, y: PointSignal): PointSignal
 * sum(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
function sum(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

function sum(x: PointSignal, y: VectorSignal): PointSignal;

function sum(x: VectorSignal, y: PointSignal): PointSignal;

function sum(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * sumList(x: Array<number>): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values in an array
 */
function sumList(x: Array<number>): ScalarSignal;

/**
*  
 * switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal
 *  
 * 
 * Returns a signal which at any point of time takes the value of one of the elements in the provided map, or the provided default value, depending on the momentary value of the given condition Signal.
 */
function switch(condition: StringSignal | string, map: {[key: string]: string}, defaultValue: string): StringSignal;

/**
*  
 * tan(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the tangent of the value of the given signal (interpreted as radians).
 */
function tan(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */
function toRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * val(constant: number): ScalarSignal
 * val(constant: string): StringSignal
 * val(constant: boolean): BoolSignal
 *  
 * 
 * Returns a signal that has a constant value which is specified by the argument.
 * **Note**: Primitive types are implicitly converted to constant signals when passed as function or property-setter arguments, therefore using `val` in such scenarios is not required.
 */
function val(constant: number): ScalarSignal;

function val(constant: string): StringSignal;

function val(constant: boolean): BoolSignal;

/**
*  
 * vector(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): VectorSignal
 *  
 * 
 * Combines three signals and returns the result as a `VectorSignal`.
 */
function vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal;

/**
*  
 * xor(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical exclusive disjunction of the values of the given signals. It is `true` every time exactly one of the input signals is `true` and `false` at all other times.
 * **Note**: It is equivalent to `ReactiveModule.ne`.
 * 
 * **See Also**: `BoolSignal.xor`
 */
function xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * xorList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical xor of the values in an array
 */
function xorList(x: Array<BoolSignal>): BoolSignal;

}
export = ReactiveModule;
