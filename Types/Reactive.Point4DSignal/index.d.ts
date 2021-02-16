/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface Point4DSignal {
/**
* ```
(get) bottom: ScalarSignal
(set) (Not Available)
```

Represents the bottom component of the `Insets`, the third element of the vector.
*/
bottom: ScalarSignal | number;
/**
* ```
(get) left: ScalarSignal
(set) (Not Available)
```

Represents the left component of the `Insets`, the second element of the vector.
*/
left: ScalarSignal | number;
/**
* ```
(get) right: ScalarSignal
(set) (Not Available)
```

Represents the bottom component of the `Insets`, the fourth element of the vector.
*/
right: ScalarSignal | number;
/**
* ```
(get) top: ScalarSignal
(set) (Not Available)
```

Represents the top component of the `Insets`, the first element of the vector.
*/
top: ScalarSignal | number;
/**
* ```
(get) w: ScalarSignal
(set) (Not Available)
```

Represents the W component, the fourth element of the vector.
*/
w: ScalarSignal | number;
/**
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate, the first element of the vector.
*/
x: ScalarSignal | number;
/**
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate, the second elemnt of the vector.
*/
y: ScalarSignal | number;
/**
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component, the third element of the vector.
*/
z: ScalarSignal | number;
/**
*  
 * abs(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * 
 * **See Also**: `ReactiveModule.abs`
 */
abs(): ScalarSignal;

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
 */
add(other: ScalarSignal | number): ScalarSignal;

add(other: VectorSignal): PointSignal;

add(other: VectorSignal): VectorSignal;

add(other: PointSignal): PointSignal;

/**
*  
 * atan2(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * 
 * **See Also**: `ReactiveModule.atan2`
 */
atan2(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * ceil(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.ceil`
 */
ceil(): ScalarSignal;

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
 */
clamp(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

clamp(min: ScalarSignal | number, max: ScalarSignal | number): Point2DSignal;

clamp(min: ScalarSignal | number, max: ScalarSignal | number): VectorSignal;

/**
*  
 * cross(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * 
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
cross(other: VectorSignal): VectorSignal;

/**
*  
 * distance(other: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */
distance(other: PointSignal): ScalarSignal;

/**
*  
 * div(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.div`
 */
div(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * dot(other: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * 
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
dot(other: VectorSignal): ScalarSignal;

/**
*  
 * floor(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.floor`
 */
floor(): ScalarSignal;

/**
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */
fromRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
* 
 *  
 * history(framesCount: number): SignalHistory<Point4D>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */
history(framesCount: number): SignalHistory<Point4D>;

/**
*  
 * magnitude(): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */
magnitude(): ScalarSignal;

/**
*  
 * magnitudeSquared(): ScalarSignal
 *  
 * 
 * Returns the squared length (magnitude) of a given signal.
 * 
 * Calculating the squared magnitude instead of the magnitude is much faster.
 * Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
 */
magnitudeSquared(): ScalarSignal;

/**
*  
 * max(other: ScalarSignal): ScalarSignal
 * max(other: ScalarSignal): Point2DSignal
 * max(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the component-wise values that are the greater of the values of the given signals.
 */
max(other: ScalarSignal | number): ScalarSignal;

max(other: ScalarSignal | number): Point2DSignal;

max(other: ScalarSignal | number): VectorSignal;

/**
*  
 * min(other: ScalarSignal): ScalarSignal
 * min(other: ScalarSignal): Point2DSignal
 * min(other: ScalarSignal): VectorSignal
 *  
 * 
 * Returns a signal with the component-wise values that are the lesser of the values of the given signals.
 */
min(other: ScalarSignal | number): ScalarSignal;

min(other: ScalarSignal | number): Point2DSignal;

min(other: ScalarSignal | number): VectorSignal;

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
 */
mix(signal: ScalarSignal | number, factor: ScalarSignal | number): ScalarSignal;

mix(signal: Point2DSignal, factor: ScalarSignal | number): Point2DSignal;

mix(signal: PointSignal, factor: ScalarSignal | number): PointSignal;

mix(signal: VectorSignal, factor: ScalarSignal | number): VectorSignal;

mix(signal: Point4DSignal, factor: ScalarSignal | number): Point4DSignal;

mix(signal: TransformSignal, factor: ScalarSignal | number): TransformSignal;

/**
*  
 * mod(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * 
 * **See Also**: `ReactiveModule.mod`
 */
mod(other: ScalarSignal | number): ScalarSignal;

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
 */
mul(other: ScalarSignal | number): ScalarSignal;

mul(other: VectorSignal): VectorSignal;

mul(other: ScalarSignal | number): VectorSignal;

/**
*  
 * neg(): ScalarSignal
 * neg(): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * 
 * **See Also**: `ReactiveModule.neg`, `ScalarSignal.neg`, `VectorSignal.neg`
 */
neg(): ScalarSignal;

neg(): VectorSignal;

/**
*  
 * normalize(): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */
normalize(): VectorSignal;

/**
*  
 * pinLastValue(): Point4DSignal
 *  
 * 
 * Returns a new `Point4DSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 */
pinLastValue(): Point4DSignal;

/**
*  
 * pow(exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal. The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ReactiveModule.pow`
 */
pow(exponent: ScalarSignal | number): ScalarSignal;

/**
*  
 * reflect(normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */
reflect(normal: VectorSignal): VectorSignal;

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
 */
round(): ScalarSignal;

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
 */
sign(): ScalarSignal;

/**
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */
smoothStep(x: ScalarSignal | number, edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal;

/**
*  
 * sqrt(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * 
 * **See Also**: `ReactiveModule.sqrt`
 */
sqrt(): ScalarSignal;

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
 */
sub(other: ScalarSignal | number): ScalarSignal;

sub(other: PointSignal): VectorSignal;

sub(other: VectorSignal): PointSignal;

sub(other: VectorSignal): VectorSignal;

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
 */
sum(other: ScalarSignal | number): ScalarSignal;

sum(other: VectorSignal): PointSignal;

sum(other: VectorSignal): VectorSignal;

sum(other: PointSignal): PointSignal;

/**
*  
 * toHSVA(): HsvaSignal
 *  
 * 
 * Convert this signal to HSVA signal, using H, S, V, A from four components of vector respectively.
 */
toHSVA(): HsvaSignal;

/**
*  
 * toRGBA(): RgbaSignal
 *  
 * 
 * Convert this signal to RGBA signal, using R, G, B, A from four components of vector respectively.
 */
toRGBA(): RgbaSignal;

/**
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */
toRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

}
