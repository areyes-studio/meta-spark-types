/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
declare interface RgbaSignal {
/** 
* ```
(get) red: ScalarSignal
(set) (Not Available)
```

Returns the value of the red channel between 0 and 1.0.
*/ 
red: ScalarSignal;
/** 
* ```
(get) green: ScalarSignal
(set) (Not Available)
```

Returns the value of the green channel between 0 and 1.0.
*/ 
green: ScalarSignal;
/** 
* ```
(get) blue: ScalarSignal
(set) (Not Available)
```

Returns the value of the blue channel between 0 and 1.0.
*/ 
blue: ScalarSignal;
/** 
* ```
(get) alpha: ScalarSignal
(set) (Not Available)
```

Returns the value of the alpha channel between 0 and 1.0.
*/ 
alpha: ScalarSignal;
/** 
*  
 * toHSVA(): HsvaSignal
 *  
 * 
 * Convert this signal into HSVA color space.
 */toHSVA(): HsvaSignal
 ;

/** 
*  
 * toVec4(): Point4DSignal
 *  
 * 
 * Convert this signal to Vector signal, using R, G, B, A for four components of vector respectively.
 */toVec4(): Point4DSignal
 ;

} 
