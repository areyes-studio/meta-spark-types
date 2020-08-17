/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
declare interface Face2D {
/** 
* ```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

Specifies a `BoundingBoxSignal` object describing the face bounding box relative to normalized screen space.
*/ 
boundingBox: BoundingBoxSignal;
/** 
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

A `BoolSignal` indicating whether the face was tracked this frame.
If the face was not tracked, other properties represent the most recent tracked frame.
*/ 
isTracked: BoolSignal | boolean;
} 
