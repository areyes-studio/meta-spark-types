/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface ColorPaintMaterial {
/** 
* ```
(get) backgroundInfluence: ScalarSignal
(set) backgroundInfluence: ScalarSignal
```

Specifies the influence of the background face on the paint texture.
*/ 
backgroundInfluence: ScalarSignal | number;
/** 
* ```
(get) paintBrightness: ScalarSignal
(set) paintBrightness: ScalarSignal
```

Specifies the simulated paint brightness.
*/ 
paintBrightness: ScalarSignal | number;
}
