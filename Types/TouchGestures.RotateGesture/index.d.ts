/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface RotateGesture {
/**
* ```
(get) location: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` that represents the current center point between two touches of the rotate gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of Rotateing on a specific object.
*/
location: Point2DSignal;
/**
* ```
(get) rotation: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the rotation indicated by the gesture, in radians.
*/
rotation: ScalarSignal | number;
}
