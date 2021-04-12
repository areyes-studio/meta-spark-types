/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface Button {
/**
* ```
(get) pressed: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` that is `true` on frames where the button is being pressed, and `false`
when it isn't.
Returns a `BoolSignal` that is `true` on any frames where the button is pressed or held down,
and `false` on any frames where the button is released or remains released.
If both a press and release happen within a single frame, this signal will be `true` on the frame
the input happened, and then `false` on the next. Similarly, if a button is released and re-pressed
on a single frame, the signal will be `false` on the frame the button was pressed and `true` on
the next.
*/
pressed: BoolSignal;
}
