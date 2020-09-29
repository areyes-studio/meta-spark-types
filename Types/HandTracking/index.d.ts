/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace HandTrackingModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of detected hands.
*/
const count: ScalarSignal | number;
/**
*  
 * hand(index: number): Hand
 *  
 * 
 * Returns the `Hand` indicated by index.
 */
function hand(index: number): Hand;

}
export = HandTrackingModule;
