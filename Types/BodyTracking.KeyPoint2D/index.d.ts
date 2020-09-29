/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
declare interface KeyPoint2D {
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Boolean signal representing whether this body key point is being tracked right now or not.
*/
isTracked: BoolSignal | boolean;
/**
* ```
(get) keyPoint: Point2DSignal
(set) (Not Available)
```

Point signal representing the key point
*/
keyPoint: Point2DSignal;
}
