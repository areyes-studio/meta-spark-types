/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface Tracking {
/** 
* ```
(get) isTracking: BoolSignal
(set) (Not Available)
```
*/ 
isTracking: BoolSignal;
/** 
* ```
(get) globalTransform: TransformSignal
(set) (Not Available)
```
*/ 
globalTransform: TransformSignal;
/** 
* ```
(get) targetAspectRatio: ScalarSignal
(set) (Not Available)
```
*/ 
targetAspectRatio: ScalarSignal;
} 
