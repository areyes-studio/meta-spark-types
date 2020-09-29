/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
declare interface LongPressGesture {
/**
* ```
(get) location: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` that represents the location of the gesture in screen coordinates.
**Note**: The location is always specified in the screen coordinates, even if the event was emitted as a result of LongPressing on a specific object.
*/
location: Point2DSignal;
}
