/// <reference path="../Reactive.ColorSignal/index.d.ts" />
declare interface ColorTexture {
/** 
* ```
(get) (Not Available)
(set) color: ColorSignal
```

Specifies a `ColorSignal` for a solid color texture. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/ 
color: ColorSignal;
}
