/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface RotateGesture {
/** 
* ```
(get) location: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` object that represents the center point between two touches in screen coordinates.

**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of rotating on a specific object.
*/ 
location: Point2DSignal;
/** 
* ```
(get) rotation: ScalarSignal
(set) (Not Available)
```

Specifies a [`ScalarSignal`](/docs/camera-effects/reference/reactive_module/scalarsignal_class) representing the rotation indicated by the gesture, in radians.
*/ 
rotation: ScalarSignal | number;
} 
