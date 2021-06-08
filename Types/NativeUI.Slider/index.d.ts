/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Slider {
/**
* ```
(get) value: ScalarSignal
(set) value: ScalarSignal
```

The value of the slider object, as a scalar signal between 0 and 1.
*/
value: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```

The visibility of the slider object, set via a boolean value.
*/
visible: BoolSignal | boolean;
}
