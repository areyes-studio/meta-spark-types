/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Location.CoordinateSignal/index.d.ts" />
declare namespace LocationModule {
/** 
* ```
(get) coordinate: CoordinateSignal
(set) (Not Available)
```

Current device geolocation or 'Null Island' if invalid.
**See**: `hasValidLocation`
*/ 
const coordinate: CoordinateSignal;
/** 
* ```
(get) hasValidLocation: BoolSignal
(set) (Not Available)
```

`BoolSignal` describing whenever or not the geolocation provided by
`coordinate` property is valid.
*/ 
const hasValidLocation: BoolSignal | boolean;
}
export = LocationModule;
