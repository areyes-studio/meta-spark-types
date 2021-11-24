/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface StringSignalSource {
/**
* ```
(get) signal: StringSignal
(set) (Not Available)
```

Get a signal to monitor the value
*/
signal: StringSignal;
/**
*  
 * dispose(): void
 *  
 * 
 * Dispose the signal resources associated with current StringSignalSource
 */
dispose(): void;

/**
*  
 * set(value: StringSignal | string): void
 *  
 * 
 * Set the value of the source so all related signals would be updated with new value
 */
set(value: StringSignal | string): void;

}
