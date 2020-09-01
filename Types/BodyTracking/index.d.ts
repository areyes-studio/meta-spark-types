/// <reference path="../BodyTracking.Body/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace BodyTrackingModule {
/** 
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the count of tracked bodies.
*/ 
const count: ScalarSignal | number;
/** 
*  
 * body(index: number): Body
 *  
 * 
 * Returns a `Body` object.
 */ 
function body(index: number): Body;

}
export = BodyTrackingModule;
