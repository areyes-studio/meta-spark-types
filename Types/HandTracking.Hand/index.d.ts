/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface Hand {
/**
* ```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

The hand transform relative to the camera coordinate system, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal)
*/
cameraTransform: TransformSignal;
}
