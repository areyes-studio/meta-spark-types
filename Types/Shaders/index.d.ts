/// <reference path="../Shaders.BlendMode/index.d.ts" />
/// <reference path="../Shaders.BuiltinUniform/index.d.ts" />
/// <reference path="../Shaders.ColorSpace/index.d.ts" />
/// <reference path="../Shaders.DerivativeType/index.d.ts" />
/// <reference path="../Shaders.GradientType/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Shaders.SdfVariant/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Shaders.VertexAttribute/index.d.ts" />
declare namespace ShadersModule {
/**
*  
 * blend(src: ShaderSignal | PointSignal | Point4DSignal, dst: ShaderSignal | PointSignal | Point4DSignal, config: {mode: BlendMode}): ShaderSignal
 *  
 * 
 * Blends two colors using the specified blending mode.
 * When a color is passed as a `PointSignal`, its alpha value is considered to be 1.
 * If both colors are passed as a `PointSignal` (without the alpha channel specified), the result will also be a `PointSignal`.
 * `src`: either a `PointSignal`, a `Point4DSignal` or a Shader which outputs one of these two types.
 * `dst`: either a `PointSignal`, a `Point4DSignal` or a Shader which outputs one of these two types.
 * returns: a shader which outputs a `Point4DSignal` if either of (or both) `src` or `dst` are of type `Point4DSignal`, or a `PointSignal` if not.
 */
function blend(src: Point4DSignal | PointSignal | ShaderSignal, dst: Point4DSignal | PointSignal | ShaderSignal, config: {mode: BlendMode}): ShaderSignal;

/**
*  
 * colorSpaceConvert(color: ShaderSignal | PointSignal | Point4DSignal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal
 *  
 * 
 * Converts a color from the input color space to the output color space.
 * `color`: either a `PointSignal`, a `Point4DSignal` or a shader which outputs one of these two types.
 * returns: a shader which outputs a `Point4DSignal` if `color` is of `Point4DSignal` type, or a `PointSignal` if not.
 */
function colorSpaceConvert(color: Point4DSignal | PointSignal | ShaderSignal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal;

/**
*  
 * composition(f: ShaderSignal, g: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal | TransformSignal): ShaderSignal
 *  
 * 
 * Returns a signal for the shader composition of the two given functions (a texture and a transform for example).
 * `f`: a shader which takes in a value of one type and outputs a different type. For example, `function_f(A): B`
 * `g`: a shader which takes in a value of one type and outputs a different type (for example, `function_g(I): A`), or a signal of `A`.
 * returns: a shader of `function_f(function_g(I)) => A`, if `g` was a shader, or `function_f(signal of A) => B`, if otherwise.
 */
function composition(f: ShaderSignal, g: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

function function_f(A): B`;

function type (for example, `function_g(I): A`), or a signal of `A`.;

/**
*  
 * derivative(v: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal, config: {derivativeType: DerivativeType}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified shader derivative of the given signal.
 * `v`: either a `ScalarSignal`, a `Point2DSignal`, a `PointSignal`, a `Point4DSignal`, a `VectorSignal`, or a shader which outputs one of these types.
 * returns: a shader of a derivate type specified by `config`.
 */
function derivative(v: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | VectorSignal | number, config: {derivativeType: DerivativeType}): ShaderSignal;

/**
*  
 * fallback(main: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal | TransformSignal, fallback: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal | TransformSignal): ShaderSignal
 *  
 * 
 * Forwards the `main` input if present, otherwise uses `fallback`.
 * `main`: a signal or shader which outputs a value of signal type.
 * `fallback`: a signal or shader which outputs a value of signal type.
 * returns: `main` if its output is present, or `fallback` if not.
 */
function fallback(main: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number, fallback: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

/**
*  
 * fragmentStage(v: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal | TransformSignal): ShaderSignal
 *  
 * 
 * Forces the computation of `val` to happen at the fragment stage.
 * `v`: a signal or shader which outputs a value of signal type.
 */
function fragmentStage(v: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

/**
*  
 * functionScalar(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(ScalarSignal): ScalarSignal`
 */
function functionScalar(): ShaderSignal;

function function(ScalarSignal): ScalarSignal`;

/**
*  
 * functionVec2(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(Point2DSignal): Point2DSignal`
 */
function functionVec2(): ShaderSignal;

function function(Point2DSignal): Point2DSignal`;

/**
*  
 * functionVec3(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(PointSignal): PointSignal`
 */
function functionVec3(): ShaderSignal;

function function(PointSignal): PointSignal`;

/**
*  
 * functionVec4(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(Point4DSignal): Point4DSignal`
 */
function functionVec4(): ShaderSignal;

function function(Point4DSignal): Point4DSignal`;

/**
*  
 * gradient(config: {type: GradientType}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified gradient.
 * returns: shader `function(Point2DSignal): ScalarSignal` representing a gradient defined by `config`
 */
function gradient(config: {type: GradientType}): ShaderSignal;

function function(Point2DSignal): ScalarSignal` representing a gradient defined by `config`;

/**
*  
 * renderTargetSize(): Point2DSignal
 *  
 * 
 * Returns a signal of the current render target's size.
 * returns: shader `function(): Point2DSignal`
 */
function renderTargetSize(): Point2DSignal;

function function(): Point2DSignal`;

/**
*  
 * sdfAnnular(sdf: ShaderSignal, width: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape made annular (ring-like) by the specified width.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `width`: number, ScalarSignal or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfAnnular(sdf: ShaderSignal, width: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfCircle(center: ShaderSignal | Point2DSignal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal for a circle SDF shape.
 * `center`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfCircle(center: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfComplement(sdf: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the complement of the given SDF shape.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfComplement(sdf: ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfDifference(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the difference of the two given SDF shapes.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal` which result is the product of substracting result of `sdf2` from result of `sdf1`
 */
function sdfDifference(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal` which result is the product of substracting result of `sdf2` from result of `sdf1`;

/**
*  
 * sdfEllipse(center: ShaderSignal | Point2DSignal, halfSize: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal for an ellipse SDF shape.
 * `center`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `halfSize`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfEllipse(center: Point2DSignal | ShaderSignal, halfSize: Point2DSignal | ShaderSignal): ShaderSignal;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfFlip(sdf: ShaderSignal, offset: ShaderSignal | Point2DSignal, normal: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape flipped around the plane given by the offset an normal.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `offset`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `normal`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfFlip(sdf: ShaderSignal, offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfHalfPlane(offset: ShaderSignal | Point2DSignal, normal: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal for a half-plane SDF shape.
 * `offset`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `normal`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfHalfPlane(offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal): ShaderSignal;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the intersection of the two given SDF shapes.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfLine(offset: ShaderSignal | Point2DSignal, normal: ShaderSignal | Point2DSignal, halfWidth: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal for a line SDF shape.
 * `offset`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `normal`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `halfWidth`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfLine(offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal, halfWidth: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfMix(sdf1: ShaderSignal, sdf2: ShaderSignal, alpha: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the linear interpolation of the two given SDF shapes, modulated by alpha.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * `alpha`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfMix(sdf1: ShaderSignal, sdf2: ShaderSignal, alpha: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfPolygon(center: ShaderSignal | Point2DSignal, radius: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal, config: {sdfVariant: SdfVariant}): ShaderSignal
 *  
 * 
 * Returns a signal for a polygon SDF shape.
 * `center`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * `numSides`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfPolygon(center: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number, numSides: ScalarSignal | ShaderSignal | number, config: {sdfVariant: SdfVariant}): ShaderSignal;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfRectangle(center: ShaderSignal | Point2DSignal, halfSize: ShaderSignal | Point2DSignal, config: {sdfVariant: SdfVariant}): ShaderSignal
 *  
 * 
 * Returns a signal for a rectangle SDF shape.
 * `center`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `halfSize`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfRectangle(center: Point2DSignal | ShaderSignal, halfSize: Point2DSignal | ShaderSignal, config: {sdfVariant: SdfVariant}): ShaderSignal;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, size: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape's grid repetition.
 * The shape should be centered on the pivot and fit within the given size.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `size`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfRepeat(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, size: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfRotation(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, angle: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape rotated around the given pivot by the given angle.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `angle`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfRotation(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, angle: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfRotationalRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, radius: ShaderSignal | number | ScalarSignal, numTimes: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape's rotational repetition numTimes at the given radius.
 * The shape should be centered on the pivot and fit within the angular sector defined by numTimes at the given radius.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * `numTimes`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfRotationalRepeat(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number, numTimes: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfRound(sdf: ShaderSignal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape rounded by the specified radius.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfRound(sdf: ShaderSignal, radius: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfScale(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, size: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape scaled around the given pivot by the given size.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `size`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfScale(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, size: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfShear(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, shear: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape scaled around the given pivot by the given shear amount.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `shear`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfShear(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, shear: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfSmoothDifference(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the smooth difference of the two given SDF shapes, modulated by K.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * `k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfSmoothDifference(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfSmoothIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the smooth intersection of the two given SDF shapes, modulated by K.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * `k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfSmoothIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfSmoothUnion(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the smooth union of the two given SDF shapes, modulated by K.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * `k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfSmoothUnion(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfStar(center: ShaderSignal | Point2DSignal, radius1: ShaderSignal | number | ScalarSignal, radius2: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal for a star SDF shape.
 * `center`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `radius1`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * `radius2`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * `numSides`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 */
function sdfStar(center: Point2DSignal | ShaderSignal, radius1: ScalarSignal | ShaderSignal | number, radius2: ScalarSignal | ShaderSignal | number, numSides: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(): ScalarSignal`;

function function(): ScalarSignal`;

/**
*  
 * sdfTranslation(sdf: ShaderSignal, offset: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape translated by the given offset.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `offset`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfTranslation(sdf: ShaderSignal, offset: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfTwist(sdf: ShaderSignal, pivot: ShaderSignal | Point2DSignal, twist: ShaderSignal | number | ScalarSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the given SDF shape twisted around the pivot by the given amount.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * `pivot`: `Point2DSignal` or shader `function(): Point2DSignal`
 * `twist`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfTwist(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, twist: ScalarSignal | ShaderSignal | number): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(): Point2DSignal`;

function function(): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * sdfUnion(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the union of the two given SDF shapes.
 * `sdf1`: shader `function(Point2DSignal): ScalarSignal`
 * `sdf2`: shader `function(Point2DSignal): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
function sdfUnion(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

function function(Point2DSignal): ScalarSignal`;

/**
*  
 * textureSampler(texture: ShaderSignal, uv: ShaderSignal | Point2DSignal): ShaderSignal
 *  
 * 
 * Samples the given texture at the specified uv coordinates.
 * `texture`: shader `function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal`
 * `uv`: `Point2DSignal` or shader `function(): Point2DSignal`
 * returns: shader `function(): ScalarSignal`, `function(): Point2DSignal`, `function(): PointSignal` or `function(): Point4DSignal` depending on underlying `texture` shader return type
 */
function textureSampler(texture: ShaderSignal, uv: Point2DSignal | ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal`;

function function(): Point2DSignal`;

function function(): ScalarSignal`, `function(): Point2DSignal`, `function(): PointSignal` or `function(): Point4DSignal` depending on underlying `texture` shader return type;

/**
*  
 * textureTransform(texture: ShaderSignal, transform: ShaderSignal): ShaderSignal
 *  
 * 
 * Transforms the given texture with the specified Mat3 transform.
 * `texture`: shader `function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal`
 * `transform`: shader `function(): Matrix3Signal`
 * returns: shader `function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal` depending on underlying `texture` shader return type
 */
function textureTransform(texture: ShaderSignal, transform: ShaderSignal): ShaderSignal;

function function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal`;

function function(): Matrix3Signal`;

function function(Point2DSignal): ScalarSignal`, `function(Point2DSignal): Point2DSignal`, `function(Point2DSignal): PointSignal` or `function(Point2DSignal): Point4DSignal` depending on underlying `texture` shader return type;

/**
*  
 * vertexAttribute(config: {variableName: VertexAttribute}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified vertex attribute depending on the VertexAttribute used.
 * returns:
 * for `VertexAttribute.POSITION` a shader `function(): Point4DSignal`
 * for `VertexAttribute.NORMAL` a shader `function(): PointSignal`
 * for `VertexAttribute.TANGENT` a shader `function(): Point4DSignal`
 * for `VertexAttribute.TEX_COORDS` a shader `function(): Point2DSignal`
 * for `VertexAttribute.COLOR` a shader `function(): Point4DSignal`
 * for `VertexAttribute.BASE_POSITION` a shader `function(): Point4DSignal`
 */
function vertexAttribute(config: {variableName: VertexAttribute}): ShaderSignal;

function function(): Point4DSignal`;

function function(): PointSignal`;

function function(): Point4DSignal`;

function function(): Point2DSignal`;

function function(): Point4DSignal`;

function function(): Point4DSignal`;

/**
*  
 * vertexTransform(config: {variableName: BuiltinUniform}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified vertex transform depending on the BuiltinUniform used.
 * returns:
 * for `BuiltinUniform.MVP_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.MV_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.M_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.V_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.P_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.VP_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.NORMAL_MATRIX` a shader `function(): Matrix3Signal`
 * for `BuiltinUniform.INV_M_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.INV_V_MATRIX` a shader `function(): TransformSignal`
 * for `BuiltinUniform.INV_P_MATRIX` a shader `function(): TransformSignal`
 */
function vertexTransform(config: {variableName: BuiltinUniform}): ShaderSignal;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): Matrix3Signal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

function function(): TransformSignal`;

}
export = ShadersModule;
