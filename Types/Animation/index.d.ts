/// <reference path="../Reactive.AnimationBlend/index.d.ts" />
/// <reference path="../Reactive.AnimationBlendInput/index.d.ts" />
/// <reference path="../Animation.AnimationClip/index.d.ts" />
/// <reference path="../Animation.AnimationClips/index.d.ts" />
/// <reference path="../Animation.AnimationPlaybackController/index.d.ts" />
/// <reference path="../Animation.AnimationPlaybackControllers/index.d.ts" />
/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.ArrayOfScalarSignals/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.Driver/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Animation.RotationSampler/index.d.ts" />
/// <reference path="../Animation.SamplerFactory/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Animation.TimeDriver/index.d.ts" />
/// <reference path="../Animation.ValueDriver/index.d.ts" />
declare class AnimationModule {
/**
* ```
(get) animationClips: AnimationClips
(set) (Not Available)
```

Get an object that allows access to animation clips.
*/
static readonly animationClips: AnimationClips;
/**
* ```
(get) playbackControllers: AnimationPlaybackControllers
(set) (Not Available)
```

Get an object that allows access to animation playback controllers.
*/
static readonly playbackControllers: AnimationPlaybackControllers;
/**
* ```
(get) samplers: SamplerFactory
(set) (Not Available)
```

Returns an instance of a `SamplerFactory` object that can be used to construct animation samplers.
*/
static readonly samplers: SamplerFactory;
/**
*  
 * animate(driver: TimeDriver | ValueDriver, sampler: ScalarSampler): ScalarSignal
 * animate(driver: TimeDriver | ValueDriver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
 * animate(driver: TimeDriver | ValueDriver, sampler: RotationSampler): QuaternionSignal
 * animate(driver: TimeDriver | ValueDriver, sampler: ColorSampler): RgbaSignal
 *  
 * 
 * Combines the driver and the sampler to create a signal that can be used to animate arbitrary properties of arbitrary objects.
 * For `TimeDriver`-based animations the animation will start only when `TimeDriver.start` is invoked.
 */
static animate(driver: TimeDriver | ValueDriver, sampler: ScalarSampler): ScalarSignal;

static animate(driver: TimeDriver | ValueDriver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals;

static animate(driver: TimeDriver | ValueDriver, sampler: RotationSampler): QuaternionSignal;

static animate(driver: TimeDriver | ValueDriver, sampler: ColorSampler): RgbaSignal;

/**
*  
 * animationBlend(blendInputs: Array<AnimationBlendInput>, normalizeWeights?: false | true): AnimationBlend
 *  
 * 
 * Constructs a blended animation from an array of AnimationBlendInputs, which can be applied to a target ThreeDObject.
 * * 'blendInputs' - the array of blend inputs. Each input consists of an animation clip, progress, and weight.
 * * 'normalizeWeights' - whether to divide each weight by the total sum, to force the weights to sum to 1.
 */
static animationBlend(blendInputs: Array<AnimationBlendInput>, normalizeWeights?: false | true): AnimationBlend;

/**
*  
 * blendInput(clip: AnimationClip, progress: ScalarSignal, weight: ScalarSignal): AnimationBlendInput
 *  
 * 
 * Constructs an AnimationBlendInput which can be used for Animation Blending.
 * * 'clip' - the source animation clip from which to sample animation data.
 * * 'progress' - the time driver controlling at which point in time to sample the above clip. Ranges from 0 to 1.
 * * 'weight' - the amount this input affects the final blend. Weights for all blend inputs ideally add up to 1.
 */
static blendInput(clip: AnimationClip, progress: ScalarSignal | number, weight: ScalarSignal | number): AnimationBlendInput;

/**
*  
 * timeDriver(params?: {durationMilliseconds?: number, loopCount?: number, mirror?: false | true}): TimeDriver
 *  
 * 
 * Returns a `TimeDriver` object that drives an animation for the specified parameters.
 * Optional parameters that can be used:
 *  - `durationMilliseconds` - desgnates overall duration that driver should use. Default: `0` aka no specified duration.
 *  - `loopCount` - defines the number of iterations before the time driver stops. Default: `0`.
 *  - `mirror` - boolean value that controls whether the drive should replay the animation backwards on every other iteration.
 */
static timeDriver(params?: {durationMilliseconds?: number, loopCount?: number, mirror?: false | true}): TimeDriver;

/**
*  
 * valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
 *  
 * 
 * Returns a `ValueDriver` object that drives an animation based on values emitted from a `ScalarSignal`.
 * The signal values are normalized and clamped to specified `min`` and `max`` values.
 */
static valueDriver(value: ScalarSignal | number, min: number, max: number): ValueDriver;

}
export = AnimationModule;
