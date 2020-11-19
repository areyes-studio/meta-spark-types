/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface Button {
/**
* ```
(get) pressed: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` that is `true` on frames where the button is being pressed, and `false`
when it isn't.
*/
pressed: BoolSignal | boolean;
}
