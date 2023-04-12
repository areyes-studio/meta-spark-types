/// <reference path="../Reactive.Vec4/index.d.ts" />
declare interface Color {
/**
* ```
(get) alpha: number
(set) (Not Available)
```
*/
alpha: number;
/**
* ```
(get) blue: number
(set) (Not Available)
```
*/
blue: number;
/**
* ```
(get) brightness: number
(set) (Not Available)
```
*/
brightness: number;
/**
* ```
(get) green: number
(set) (Not Available)
```
*/
green: number;
/**
* ```
(get) hue: number
(set) (Not Available)
```
*/
hue: number;
/**
* ```
(get) model: ColorModel
(set) (Not Available)
```
*/
model: ColorModel;
/**
* ```
(get) red: number
(set) (Not Available)
```
*/
red: number;
/**
* ```
(get) saturation: number
(set) (Not Available)
```
*/
saturation: number;
/**
*  
 * fromHSVA(values: undefined): Color
 * fromHSVA(values: {alpha?: number, brightness: number, hue: number, saturation: number}): Color
 * fromHSVA(hue: number, saturation: number, brightness: number, alpha?: number): Color
 *  
 * 
 */
fromHSVA(values: undefined): Color;

fromHSVA(values: {alpha?: number, brightness: number, hue: number, saturation: number}): Color;

fromHSVA(hue: number, saturation: number, brightness: number, alpha?: number): Color;

/**
*  
 * fromRGBA(values: undefined): Color
 * fromRGBA(values: {alpha?: number, blue: number, green: number, red: number}): Color
 * fromRGBA(red: number, green: number, blue: number, alpha?: number): Color
 *  
 * 
 */
fromRGBA(values: undefined): Color;

fromRGBA(values: {alpha?: number, blue: number, green: number, red: number}): Color;

fromRGBA(red: number, green: number, blue: number, alpha?: number): Color;

/**
*  
 * fromVec4(vec: Vec4, model: ColorModel): Color
 *  
 * 
 */
fromVec4(vec: Vec4, model: ColorModel): Color;

/**
*  
 * toVec4(): Vec4
 *  
 * 
 */
toVec4(): Vec4;

}
