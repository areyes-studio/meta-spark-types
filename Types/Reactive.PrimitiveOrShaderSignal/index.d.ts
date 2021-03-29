/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
declare interface PrimitiveOrShaderSignal extends ISignal {
/**
* 
 *  
 * history(framesCount: number): SignalHistory<any>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */
history(framesCount: number): SignalHistory<any>;

}
