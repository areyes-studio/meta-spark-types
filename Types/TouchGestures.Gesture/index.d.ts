/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
declare interface Gesture {
/**
* ```
(get) state: Signal<State>
(set) (Not Available)
```

Returns a `Signal` that represents the current state of the gesture.
*/
state: Signal<State>;
/**
* ```
(get) type: GestureType
(set) (Not Available)
```

Specifies a `TouchGesturesModule.Gesture.Type` enum value representing the type of gesture detected.
*/
type: GestureType;
}
