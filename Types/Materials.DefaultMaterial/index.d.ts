/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface DefaultMaterial {
/**
* ```
(get) ambientColorFactor: RgbaSignal
(set) ambientColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a ambient color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
ambientColorFactor: RgbaSignal;
/**
* ```
(get) blendMode: Signal<MaterialsModule.BlendMode>
(set) blendMode: Signal<MaterialsModule.BlendMode>
```

Specifies the material blend mode.
*/
blendMode: Signal<MaterialsModule.BlendMode>;
/**
* ```
(get) diffuseColorFactor: RgbaSignal
(set) diffuseColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a diffuse color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
diffuseColorFactor: RgbaSignal;
/**
* ```
(get) emissive: TextureBase | null
(set) emissive: TextureBase | null
```

Specifies the emissive texture of the material.
*/
emissive: TextureBase | null;
/**
* ```
(get) emissiveTextureTransform: TextureTransform
(set) emissiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the emissive texture of this material.
*/
emissiveTextureTransform: TextureTransform;
/**
* ```
(get) emmisiveColorFactor: RgbaSignal
(set) emmisiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a emmisive color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emmisiveColorFactor: RgbaSignal;
/**
* ```
(get) multiply: TextureBase | null
(set) multiply: TextureBase | null
```

Specifies the multiplicative texture of the material.
*/
multiply: TextureBase | null;
/**
* ```
(get) multiplyTextureTransform: TextureTransform
(set) multiplyTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the multiplicative texture of this material.
*/
multiplyTextureTransform: TextureTransform;
/**
* ```
(get) reflective: TextureBase | null
(set) reflective: TextureBase | null
```

Specifies the reflective texture of the material.
*/
reflective: TextureBase | null;
/**
* ```
(get) specularColorFactor: RgbaSignal
(set) specularColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a specular color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
specularColorFactor: RgbaSignal;
/**
*  
 * getEmissive(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getEmissive(): Promise<TextureBase | null>;

/**
*  
 * getMultiply(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getMultiply(): Promise<TextureBase | null>;

/**
*  
 * getReflective(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getReflective(): Promise<TextureBase | null>;

}
