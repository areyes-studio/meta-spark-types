/// <reference path="../Shaders.BlendMode/index.d.ts" />
/// <reference path="../Shaders.BlendedMaterialTextures/index.d.ts" />
/// <reference path="../Shaders.BuiltinUniform/index.d.ts" />
/// <reference path="../Shaders.ColorSpace/index.d.ts" />
/// <reference path="../Shaders.DefaultMaterialTextures/index.d.ts" />
/// <reference path="../Shaders.DerivativeType/index.d.ts" />
/// <reference path="../Shaders.FacePaintMaterialTextures/index.d.ts" />
/// <reference path="../Shaders.GradientType/index.d.ts" />
/// <reference path="../Shaders.PhysicallyBasedMaterialTextures/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Shaders.SdfVariant/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Shaders.VertexAttribute/index.d.ts" />
declare class ShadersModule {
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
static blend(src: Point4DSignal | PointSignal | ShaderSignal, dst: Point4DSignal | PointSignal | ShaderSignal, config: {mode: BlendMode}): ShaderSignal;

/**
*  
 * colorSpaceConvert(color: ShaderSignal | PointSignal | Point4DSignal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal
 *  
 * 
 * Converts a color from the input color space to the output color space.
 * `color`: either a `PointSignal`, a `Point4DSignal` or a shader which outputs one of these two types.
 * returns: a shader which outputs a `Point4DSignal` if `color` is of `Point4DSignal` type, or a `PointSignal` if not.
 */
static colorSpaceConvert(color: Point4DSignal | PointSignal | ShaderSignal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal;

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
static composition(f: ShaderSignal, g: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

/**
*  
 * derivative(v: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal, config: {derivativeType: DerivativeType}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified shader derivative of the given signal.
 * `v`: either a `ScalarSignal`, a `Point2DSignal`, a `PointSignal`, a `Point4DSignal`, a `VectorSignal`, or a shader which outputs one of these types.
 * returns: a shader of a derivate type specified by `config`.
 */
static derivative(v: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | VectorSignal | number, config: {derivativeType: DerivativeType}): ShaderSignal;

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
static fallback(main: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number, fallback: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

/**
*  
 * fragmentStage(v: ShaderSignal | number | ScalarSignal | Point2DSignal | PointSignal | Point4DSignal | VectorSignal | TransformSignal): ShaderSignal
 *  
 * 
 * Forces the computation of `val` to happen at the fragment stage.
 * `v`: a signal or shader which outputs a value of signal type.
 */
static fragmentStage(v: Point2DSignal | Point4DSignal | PointSignal | ScalarSignal | ShaderSignal | TransformSignal | VectorSignal | number): ShaderSignal;

/**
*  
 * functionScalar(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(ScalarSignal): ScalarSignal`
 */
static functionScalar(): ShaderSignal;

/**
*  
 * functionVec2(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(Point2DSignal): Point2DSignal`
 */
static functionVec2(): ShaderSignal;

/**
*  
 * functionVec3(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(PointSignal): PointSignal`
 */
static functionVec3(): ShaderSignal;

/**
*  
 * functionVec4(): ShaderSignal
 *  
 * 
 * Returns a signal for the identity function over the specified type.
 * returns: shader `function(Point4DSignal): Point4DSignal`
 */
static functionVec4(): ShaderSignal;

/**
*  
 * gradient(config: {type: GradientType}): ShaderSignal
 *  
 * 
 * Returns a signal for the specified gradient.
 * returns: shader `function(Point2DSignal): ScalarSignal` representing a gradient defined by `config`
 */
static gradient(config: {type: GradientType}): ShaderSignal;

/**
*  
 * renderTargetSize(): Point2DSignal
 *  
 * 
 * Returns a signal of the current render target's size.
 * returns: shader `function(): Point2DSignal`
 */
static renderTargetSize(): Point2DSignal;

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
static sdfAnnular(sdf: ShaderSignal, width: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfCircle(center: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number): ShaderSignal;

/**
*  
 * sdfComplement(sdf: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a signal of the complement of the given SDF shape.
 * `sdf`: shader `function(Point2DSignal): ScalarSignal`
 * returns: shader `function(Point2DSignal): ScalarSignal`
 */
static sdfComplement(sdf: ShaderSignal): ShaderSignal;

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
static sdfDifference(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

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
static sdfEllipse(center: Point2DSignal | ShaderSignal, halfSize: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfFlip(sdf: ShaderSignal, offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfHalfPlane(offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

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
static sdfLine(offset: Point2DSignal | ShaderSignal, normal: Point2DSignal | ShaderSignal, halfWidth: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfMix(sdf1: ShaderSignal, sdf2: ShaderSignal, alpha: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfPolygon(center: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number, numSides: ScalarSignal | ShaderSignal | number, config: {sdfVariant: SdfVariant}): ShaderSignal;

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
static sdfRectangle(center: Point2DSignal | ShaderSignal, halfSize: Point2DSignal | ShaderSignal, config: {sdfVariant: SdfVariant}): ShaderSignal;

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
static sdfRepeat(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, size: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfRotation(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, angle: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfRotationalRepeat(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, radius: ScalarSignal | ShaderSignal | number, numTimes: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfRound(sdf: ShaderSignal, radius: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfScale(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, size: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfShear(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, shear: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfSmoothDifference(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfSmoothIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfSmoothUnion(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfStar(center: Point2DSignal | ShaderSignal, radius1: ScalarSignal | ShaderSignal | number, radius2: ScalarSignal | ShaderSignal | number, numSides: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfTranslation(sdf: ShaderSignal, offset: Point2DSignal | ShaderSignal): ShaderSignal;

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
static sdfTwist(sdf: ShaderSignal, pivot: Point2DSignal | ShaderSignal, twist: ScalarSignal | ShaderSignal | number): ShaderSignal;

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
static sdfUnion(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal;

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
static textureSampler(texture: ShaderSignal, uv: Point2DSignal | ShaderSignal): ShaderSignal;

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
static textureTransform(texture: ShaderSignal, transform: ShaderSignal): ShaderSignal;

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
static vertexAttribute(config: {variableName: VertexAttribute}): ShaderSignal;

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
static vertexTransform(config: {variableName: BuiltinUniform}): ShaderSignal;

/**
 * The `BlendMode` enum describes the blending mode.
 * @property ADD Blends two colors using the Add blend mode.
 * @property BURN Blends two colors using the Burn blend mode.
 * @property DIFFERENCE Blends two colors using the Difference blend mode.
 * @property DIVIDE Blends two colors using the Divide blend mode.
 * @property DODGE Blends two colors using the Dodge blend mode.
 * @property MAX Blends two colors using the Max blend mode.
 * @property MIN Blends two colors using the Min blend mode.
 * @property MULTIPLY Blends two colors using the Multiply blend mode.
 * @property NORMAL Blends two colors using the Normal blend mode.
 * @property OVERLAY Blends two colors using the Overlay blend mode.
 * @property PLUSDARKER Blends two colors using the PlusDarker blend mode.
 * @property SCREEN Blends two colors using the Screen blend mode.
 * @property SUBTRACT Blends two colors using the Subtract blend mode.
 */
static readonly BlendMode: {
  ADD: "ADD",
  BURN: "BURN",
  DIFFERENCE: "DIFFERENCE",
  DIVIDE: "DIVIDE",
  DODGE: "DODGE",
  MAX: "MAX",
  MIN: "MIN",
  MULTIPLY: "MULTIPLY",
  NORMAL: "NORMAL",
  OVERLAY: "OVERLAY",
  PLUSDARKER: "PLUSDARKER",
  SCREEN: "SCREEN",
  SUBTRACT: "SUBTRACT",
}
/**
 * The `ColorSpace` enum describes the color space.
 * @property HSL HSL color space.
 * @property HSV HSV color space.
 * @property RGB RGB color space.
 */
static readonly ColorSpace: {
  HSL: "HSL",
  HSV: "HSV",
  RGB: "RGB",
}
/**
 * The `BuiltinUniform` enum describes the bultin shader uniforms.
 * @property INV_M_MATRIX Inverse Model Matrix uniform.
 * @property INV_P_MATRIX Inverse Projection Matrix uniform.
 * @property INV_V_MATRIX Inverse View Matrix uniform.
 * @property MVP_MATRIX Model View Projection Matrix uniform.
 * @property MV_MATRIX Model View Matrix uniform.
 * @property M_MATRIX Model Matrix uniform.
 * @property NORMAL_MATRIX Normal Matrix uniform.
 * @property P_MATRIX Projection Matrix uniform.
 * @property VP_MATRIX View Projection Matrix uniform.
 * @property V_MATRIX View Matrix uniform.
 */
static readonly BuiltinUniform: {
  INV_M_MATRIX: "INV_M_MATRIX",
  INV_P_MATRIX: "INV_P_MATRIX",
  INV_V_MATRIX: "INV_V_MATRIX",
  MVP_MATRIX: "MVP_MATRIX",
  MV_MATRIX: "MV_MATRIX",
  M_MATRIX: "M_MATRIX",
  NORMAL_MATRIX: "NORMAL_MATRIX",
  P_MATRIX: "P_MATRIX",
  VP_MATRIX: "VP_MATRIX",
  V_MATRIX: "V_MATRIX",
}
/**
 * The `GradientType` enum describes the type of the shader gradient.
 * @property CIRCULAR The gradient will radiate outward in a circular direction.
 * @property HORIZONTAL The gradient will be in horizontal direction.
 * @property VERTICAL The gradient will be in vertical direction.
 */
static readonly GradientType: {
  CIRCULAR: "CIRCULAR",
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
}
/**
 * The `BlendedMaterialTextures` enum describes the different texture slots for a flat material.
 * @property DIFFUSE The Diffuse Texture slot of the corresponding material.
 */
static readonly BlendedMaterialTextures: {
  DIFFUSE: "DIFFUSE",
}
/**
 * The `DefaultMaterialTextures` enum describes the different texture slots for a default material.
 * @property DIFFUSE The Diffuse Texture slot of the corresponding material.
 * @property EMISSIVE The Emissive Texture slot of the corresponding material.
 * @property NORMAL The Normal Texture slot of the corresponding material.
 * @property REFLECTIVE The Reflective Texture slot of the corresponding material.
 * @property SPECULAR The Specular Texture slot of the corresponding material.
 */
static readonly DefaultMaterialTextures: {
  DIFFUSE: "DIFFUSE",
  EMISSIVE: "EMISSIVE",
  NORMAL: "NORMAL",
  REFLECTIVE: "REFLECTIVE",
  SPECULAR: "SPECULAR",
}
/**
 * The `FacePaintMaterialTextures` enum describes the different texture slots for a face paint
material.
 * @property DIFFUSE The Diffuse Texture slot of the corresponding material.
 */
static readonly FacePaintMaterialTextures: {
  DIFFUSE: "DIFFUSE",
}
/**
 * The `PhysicallyBasedMaterialTextures` enum describes the different texture slots for a
physically based material.
 * @property BASE_COLOR The Base Color Texture slot of the corresponding material.
 * @property EMISSIVE The Emissive Texture slot of the corresponding material.
 * @property METALLIC_ROUGHNESS The Metallic Roughness Texture slot of the corresponding material.
 * @property NORMAL The Normal Texture slot of the corresponding material.
 */
static readonly PhysicallyBasedMaterialTextures: {
  BASE_COLOR: "BASE_COLOR",
  EMISSIVE: "EMISSIVE",
  METALLIC_ROUGHNESS: "METALLIC_ROUGHNESS",
  NORMAL: "NORMAL",
}
/**
 * The `SdfVariant` enum describes the SDF variant.
 * @property EXACT Exact SDF variant.
 * @property SHARP Sharp SDF variant.
 */
static readonly SdfVariant: {
  EXACT: "EXACT",
  SHARP: "SHARP",
}
/**
 * The `DerivativeType` enum describes the shader derivative type.
 * @property DFDX Derivative in x direction.
 * @property DFDY Derivative in y direction.
 * @property FWIDTH Sum of the absolute derivatives in x and y.
 */
static readonly DerivativeType: {
  DFDX: "DFDX",
  DFDY: "DFDY",
  FWIDTH: "FWIDTH",
}
/**
 * The `VertexAttribute` enum describes the bultin vertex attributes.
 * @property BASE_POSITION Base Position vertex attribute.
 * @property COLOR Color vertex attribute.
 * @property NORMAL Normal vertex attribute.
 * @property POSITION Position vertex attribute.
 * @property TANGENT Tangent vertex attribute.
 * @property TEX_COORDS Texture Coordinates vertex attribute.
 */
static readonly VertexAttribute: {
  BASE_POSITION: "BASE_POSITION",
  COLOR: "COLOR",
  NORMAL: "NORMAL",
  POSITION: "POSITION",
  TANGENT: "TANGENT",
  TEX_COORDS: "TEX_COORDS",
}
}
export = ShadersModule;
