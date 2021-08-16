/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
declare interface Face2D {
/**
* ```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

The bounding box of the tracked face relative to normalized screen space, as a [`BoundingBoxSignal`](/classes/ReactiveModule.BoundingBoxSignal).
*/
boundingBox: BoundingBoxSignal;
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the face is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Face2D` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal;
}
