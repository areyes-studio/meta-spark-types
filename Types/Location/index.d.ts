/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Location.CoordinateSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class LocationModule {
/**
* ```
(get) coordinate: CoordinateSignal
(set) (Not Available)
```

Current device geolocation or 'Null Island' if invalid.
**See**: `hasValidLocation`
*/
static readonly coordinate: CoordinateSignal;
/**
* ```
(get) hasValidLocation: BoolSignal
(set) (Not Available)
```

`BoolSignal` describing whenever or not the geolocation provided by
`coordinate` property is valid.
*/
static readonly hasValidLocation: BoolSignal;
/**
* ```
(get) latitude: ScalarSignal
(set) (Not Available)
```

Current device latitue.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
static readonly latitude: ScalarSignal;
/**
* ```
(get) longitude: ScalarSignal
(set) (Not Available)
```

Current device longitude.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
static readonly longitude: ScalarSignal;
}
export = LocationModule;
