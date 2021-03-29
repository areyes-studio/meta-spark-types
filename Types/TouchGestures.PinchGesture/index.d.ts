/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface PinchGesture extends Gesture {
/**
* ```
(get) location: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` that represents the current center point between two touches of the pinch gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of pinching on a specific object.
*/
location: Point2DSignal;
/**
* ```
(get) scale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the scale factor indicated by the gesture.
*/
scale: ScalarSignal;
}
