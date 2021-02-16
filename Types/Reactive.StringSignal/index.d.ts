/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
declare module "ReactiveModule" {
global {
interface String {
lastValue: string;
concat(other: StringSignal | string): StringSignal;

delayBy(timeSpan: {milliseconds: number}): this;

eq(other: StringSignal | string): BoolSignal;

history(framesCount: number): SignalHistory<String>;

history(framesCount: number, initialValues: Array<string>): SignalHistory<String>;

monitor(): EventSource;

monitor(config: { fireOnInitialValue: ?boolean}): EventSource;

ne(other: StringSignal | string): BoolSignal;

pin(): StringSignal;

pinLastValue(): ConstStringSignal;

}
}
export interface StringSignal extends String {
/**
* ```
(get) lastValue: string
(set) (Not Available)
```

Specifies a string that represents the last value of the signal.

**Note**: The signal value is updated during simulation tick. This means that the value of `lastValue` is undefined before its first update. It is also undefined for signals that aren't used for any bindings/subscriptions, because those signals aren't guaranteed to be updated at each simulation tick.
*/
lastValue: string;
/**
*  
 * concat(other: StringSignal): StringSignal
 *  
 * 
 * Returns a `StringSignal` containing the concatenation of the values specified by the input signals.
 * 
 * **See Also**: `ReactiveModule.concat`
 */
concat(other: StringSignal | string): StringSignal;

/**
*  
 * delayBy(timeSpan: {milliseconds: number}): this
 *  
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */
delayBy(timeSpan: {milliseconds: number}): this;

/**
*  
 * eq(other: StringSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.eq`
 */
eq(other: StringSignal | string): BoolSignal;

/**
* 
 *  
 * history(framesCount: number): SignalHistory<String>
 * history(framesCount: number, initialValues: Array<string>): SignalHistory<String>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */
history(framesCount: number): SignalHistory<String>;

history(framesCount: number, initialValues: Array<string>): SignalHistory<String>;

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
 */
monitor(): EventSource;

monitor(config: { fireOnInitialValue: ?boolean}): EventSource;

/**
*  
 * ne(other: StringSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.ne`
 */
ne(other: StringSignal | string): BoolSignal;

/**
*  
 * pin(): StringSignal
 *  
 * 
 * Returns a `StringSignal` containing a constant value which is the value of the specified signal immediately after `pin` is called.
 */
pin(): StringSignal;

/**
*  
 * pinLastValue(): ConstStringSignal
 *  
 * 
 * Returns a `ConstStringSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstStringSignal can be passed to a functions which accept strings
 */
pinLastValue(): ConstStringSignal;

}
}
