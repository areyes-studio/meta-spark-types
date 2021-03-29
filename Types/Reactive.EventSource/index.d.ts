/// <reference path="../Reactive.EventSourceHistory/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />
declare interface EventSource<T> extends ISignal {
/**
* 
 *  
 * history(framesCount: number): EventSourceHistory<T>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */
history(framesCount: number): EventSourceHistory<T>;

/**
*  
 * skip(count: number): EventSource<T>
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are dropped, and subsequent ones signaled.
 */
skip(count: number): EventSource<T>;

/**
*  
 * subscribe(callback: (event: T) => void): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * 
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */
subscribe(callback: (event: T) => void): Subscription;

/**
*  
 * subscribeOnNext(callback: (event: T) => void): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * 
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */
subscribeOnNext(callback: (event: T) => void): Subscription;

/**
*  
 * subscribeWithSnapshot(snapshot: { [name: string]: ISignal}, callback: (event: T, snapshot: { [name: string]: any}) => void): Subscription
 *  
 * 
 * Sets a callback for the event source, similar to `Subscribe` function, but with additional `Snapshot` parameter.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals
 */
subscribeWithSnapshot(snapshot: { [name: string]: ISignal}, callback: (event: T, snapshot: { [name: string]: any}) => void): Subscription;

/**
*  
 * take(count: number): EventSource<T>
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are signaled, and subsequent ones ignored.
 */
take(count: number): EventSource<T>;

}
