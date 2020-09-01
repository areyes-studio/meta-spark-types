/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.ArrayOfScalarSignals/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Animation.RotationSampler/index.d.ts" />
/// <reference path="../Animation.SamplerFactory/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Animation.SignalRecorder/index.d.ts" />
/// <reference path="../Animation.TimeDriver/index.d.ts" />
/// <reference path="../Animation.ValueDriver/index.d.ts" />
declare namespace AnimationModule {
/** 
* ```
(get) samplers: SamplerFactory
(set) (Not Available)
```

Returns an instance of a `SamplerFactory` object that can be used to construct animation samplers.
*/ 
const samplers: SamplerFactory;
/** 
*  
 * animate(driver: TimeDriver | ValueDriver, sampler: ScalarSampler | ArrayOfScalarSamplers | RotationSampler | ColorSampler): ScalarSignal | ArrayOfScalarSignals | QuaternionSignal | RgbaSignal
 *  
 * 
 * Combines the driver and the sampler to create a signal that can be used to animate arbitrary properties of arbitrary objects.
 * For `TimeDriver`-based animations the animation will start only when `TimeDriver.start` is invoked.
 */ 
function animate(driver: TimeDriver | ValueDriver, sampler: ArrayOfScalarSamplers | ColorSampler | RotationSampler | ScalarSampler): ScalarSignal | ArrayOfScalarSignals | QuaternionSignal | RgbaSignal;

/** 
*  
 * makeSignalRecorder(targetSignal: ScalarSignal, params?: {maxRecordCount?: number, minRecordingGapMs?: number}): SignalRecorder
 *  
 * 
 * Begins recording a scalar signal (targetSignal) for use in a sampler.
 * This returns a SignalRecorder object that returns a SignalRecord when stopped.
 * Optional parameters are included for performance reasons:
 *  - `minRecordingGapMs` defines the minimum amount of delay between snapshots taken in ms.
 *  - `maxRecordCount` define sthe maximum number of snapshots. It must be > 0.
 * If these two values are not included, a default of `10` is used for `minRecordingGapMs` and `1000` is used for `maxRecordCount`.
 */ 
function makeSignalRecorder(targetSignal: ScalarSignal | number, params?: {maxRecordCount?: number, minRecordingGapMs?: number}): SignalRecorder;

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
function timeDriver(params?: {durationMilliseconds?: number, loopCount?: number, mirror?: false | true}): TimeDriver;

/** 
*  
 * valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
 *  
 * 
 * Returns a `ValueDriver` object that drives an animation based on values emitted from a `ScalarSignal`.
 * The signal values are normalized and clamped to specified `min`` and `max`` values.
 */ 
function valueDriver(value: ScalarSignal | number, min: number, max: number): ValueDriver;

}
export = AnimationModule;
