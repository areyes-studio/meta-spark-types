/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class HandTrackingModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of detected hands.
*/
static readonly count: ScalarSignal;
/**
*  
 * hand(index: number): Hand
 *  
 * 
 * Returns the `Hand` indicated by index.
 */
static hand(index: number): Hand;

}
export = HandTrackingModule;
