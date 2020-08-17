/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface RetouchingMaterial {
/** 
* ```
(get) eyeBrighteningFactor: ScalarSignal
(set) eyeBrighteningFactor: ScalarSignal
```

Specifies the simulated eye brightening factor.
*/ 
eyeBrighteningFactor: ScalarSignal | number;
/** 
* ```
(get) fullScreen: BoolSignal
(set) fullScreen: BoolSignal
```

Specifies whether effect should be full-screen.
*/ 
fullScreen: BoolSignal | boolean;
/** 
* ```
(get) skinSmoothingFactor: ScalarSignal
(set) skinSmoothingFactor: ScalarSignal
```

Specifies the simulated skin smoothness factor.
*/ 
skinSmoothingFactor: ScalarSignal | number;
/** 
* ```
(get) teethWhiteningFactor: ScalarSignal
(set) teethWhiteningFactor: ScalarSignal
```

Specifies the simulated teeth whitening factor.
*/ 
teethWhiteningFactor: ScalarSignal | number;
} 
