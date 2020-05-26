/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../HandTracking.Hand/index.d.ts" />
declare namespace HandTrackingModule {
/** 
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of detected hands.
*/ 
const count: ScalarSignal;
/** 
*  
 * hand(index: number): Hand
 *  
 * 
 * Returns the `Hand` indicated by index.
 */function hand(index: number): Hand
 ;

} 
export = HandTrackingModule;