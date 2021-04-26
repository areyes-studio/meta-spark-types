/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Slider {
/**
* ```
(get) value: ScalarSignal
(set) value: ScalarSignal
```

Will instruct slider to change its value.
*/
value: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```

Will instruct slider to be visible or not visible, according to passed boolean value.
*/
visible: BoolSignal | boolean;
}
