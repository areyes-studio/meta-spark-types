/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface RgbaSignal {
/**
* ```
(get) alpha: ScalarSignal
(set) (Not Available)
```

Returns the value of the alpha channel between 0 and 1.0.
*/
alpha: ScalarSignal | number;
/**
* ```
(get) blue: ScalarSignal
(set) (Not Available)
```

Returns the value of the blue channel between 0 and 1.0.
*/
blue: ScalarSignal | number;
/**
* ```
(get) green: ScalarSignal
(set) (Not Available)
```

Returns the value of the green channel between 0 and 1.0.
*/
green: ScalarSignal | number;
/**
* ```
(get) red: ScalarSignal
(set) (Not Available)
```

Returns the value of the red channel between 0 and 1.0.
*/
red: ScalarSignal | number;
/**
*  
 * pinLastValue(): RgbaSignal
 *  
 * 
 * Returns a new `RgbaSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 */
pinLastValue(): RgbaSignal;

/**
*  
 * toHSVA(): HsvaSignal
 *  
 * 
 * Convert this signal into HSVA color space.
 */
toHSVA(): HsvaSignal;

/**
*  
 * toVec4(): Point4DSignal
 *  
 * 
 * Convert this signal to Vector signal, using R, G, B, A for four components of vector respectively.
 */
toVec4(): Point4DSignal;

}
