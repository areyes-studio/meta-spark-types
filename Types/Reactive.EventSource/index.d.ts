/// <reference path="../Reactive.Subscription/index.d.ts" />
declare interface EventSource<T> {
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
 * subscribe(callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */
subscribe(callback: {}): Subscription;

/**
*  
 * subscribeOnNext(callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */
subscribeOnNext(callback: {}): Subscription;

/**
*  
 * subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal}, callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source, similar to `Subscribe` function, but with additional `Snapshot` parameter.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals
 */
subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal}, callback: {}): Subscription;

/**
*  
 * take(count: number): EventSource<T>
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are signaled, and subsequent ones ignored.
 */
take(count: number): EventSource<T>;

}
