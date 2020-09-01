/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface HsvaSignal {
/** 
* ```
(get) hue: ScalarSignal
(set) (Not Available)
```

Returns the value of the `hue` channel of this signal.
*/ 
hue: ScalarSignal | number;
/** 
* ```
(get) saturation: ScalarSignal
(set) (Not Available)
```

Returns the value of the `saturation` channel of this signal.
*/ 
saturation: ScalarSignal | number;
/** 
* ```
(get) brightness: ScalarSignal
(set) (Not Available)
```

Returns the value of the `brightness`(`value`) channel of this signal.
*/ 
brightness: ScalarSignal | number;
/** 
* ```
(get) alpha: ScalarSignal
(set) (Not Available)
```

Returns the value of the `alpha` channel of this signal.
*/ 
alpha: ScalarSignal | number;
/** 
*  
 * toRGBA(): RgbaSignal
 *  
 * 
 * Convert this signal into RGBA color space.
 * 
 * Be aware, that there is a potential loss of data, when converting HSVA values with `Saturation` set to 0.
 */ 
toRGBA(): RgbaSignal;

/** 
*  
 * toVec4(): Point4DSignal
 *  
 * 
 * Convert this signal to Vector signal, using H, S, V, A for four components of vector respectively.
 */ 
toVec4(): Point4DSignal;

}
