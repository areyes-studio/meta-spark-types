/// <reference path="../Reactive.Color/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface DefaultMaterial extends MaterialBase {
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
(get) ambientColorFactorValue: Color
(set) ambientColorFactorValue: Color
```

Specifies a `Color` for a ambient color factor. A `Color` may be created using the `Color.fromRGBA()` and `Color.fromHSVA()` static methods of the `Color` class.
Note that Rgba Color is always returned.
*/
ambientColorFactorValue: Color;
/**
* ```
(get) blendMode: StringSignal<MaterialsModule.BlendMode>
(set) blendMode: StringSignal<MaterialsModule.BlendMode>
```

Specifies the material blend mode.
*/
blendMode: StringSignal<MaterialsModule.BlendMode>;
/**
* ```
(get) blendModeValue: MaterialsModule.BlendMode
(set) blendModeValue: MaterialsModule.BlendMode
```

Specifies the material blend mode.
*/
blendModeValue: BlendMode;
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
(get) diffuseColorFactorValue: Color
(set) diffuseColorFactorValue: Color
```

Specifies a `Color` for a diffuse color factor. A `Color` may be created using the `Color.fromRGBA()` and `Color.fromHSVA()` static methods of the `Color` class.
Note that Rgba Color is always returned.
**See Also**: `Color.fromRGBA` and `Color.fromHSVA`.
*/
diffuseColorFactorValue: Color;
/**
* ```
(get) emissive: TextureBase | null
(set) emissive: TextureBase | null
```

Returns the emissive texture of the material or null if no texture was assigned.
Specifies the emissive texture of the material.
*/
emissive: TextureBase | null;
/**
* ```
(get) emissiveColorFactor: RgbaSignal
(set) emissiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a emmisive color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emissiveColorFactor: RgbaSignal;
/**
* ```
(get) emissiveColorFactorValue: Color
(set) emissiveColorFactorValue: Color
```

/**
Specifies a `Color` for a emmisive color factor. A `Color` may be created using the `Color.fromRGBA()` and `Color.fromHSVA()` static methods of the `Color` class.
Note that Rgba Color is always returned.
*/
emissiveColorFactorValue: Color;
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

Returns the multiplicative texture of the material or null if no texture was assigned.
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
(get) normalTextureScale: ScalarSignal
(set) normalTextureScale: ScalarSignal
```

The scalar parameter applied to each normal vector of the texture. This value scales the normal vector in X and Y directions.
*/
normalTextureScale: ScalarSignal;
/**
* ```
(get) normalTextureScaleValue: number
(set) normalTextureScaleValue: number
```

The scalar parameter applied to each normal vector of the texture. This value scales the normal vector in X and Y directions.
*/
normalTextureScaleValue: number;
/**
* ```
(get) reflective: TextureBase | null
(set) reflective: TextureBase | null
```

Returns the reflective texture of the material or null if no texture was assigned.
Specifies the reflective texture of the material.
*/
reflective: TextureBase | null;
/**
* ```
(get) reflectiveTextureTransform: TextureTransform
(set) reflectiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the reflective texture of this material.
*/
reflectiveTextureTransform: TextureTransform;
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
* ```
(get) specularColorFactorValue: Color
(set) specularColorFactorValue: Color
```

Specifies a `Color` for a specular color factor. A `Color` may be created using the `Color.fromRGBA()` and `Color.fromHSVA()` static methods of the `Color` class.
Note that Rgba Color is always returned.
*/
specularColorFactorValue: Color;
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
