/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface CoordinateSignal {
/**
* ```
(get) latitude: ScalarSignal
(set) (Not Available)
```

Current device latitue.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
latitude: ScalarSignal;
/**
* ```
(get) longitude: ScalarSignal
(set) (Not Available)
```

Current device longitude.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
longitude: ScalarSignal;
}
