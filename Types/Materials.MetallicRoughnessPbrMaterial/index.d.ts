/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface MetallicRoughnessPbrMaterial {
/** 
* ```
(get) (Not Available)
(set) baseColor: TextureBase | null
```

Specifies the baseColor texture of the material.
*/ 
baseColor: TextureBase | null;
/** 
* ```
(get) baseColorFactor: RgbaSignal
(set) baseColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a base color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/ 
baseColorFactor: RgbaSignal;
/** 
* ```
(get) baseColorTextureTransform: TextureTransform
(set) baseColorTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the baseColorFactor texture of this material.
*/ 
baseColorTextureTransform: TextureTransform;
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
(get) metallicFactor: ScalarSignal
(set) metallicFactor: ScalarSignal
```

Specifies the metallic factor.
*/ 
metallicFactor: ScalarSignal | number;
/** 
* ```
(get) (Not Available)
(set) metallicRoughness: TextureBase | null
```

Specifies the metallicRoughness texture of the material.
*/ 
metallicRoughness: TextureBase | null;
/** 
* ```
(get) metallicRoughnessTextureTransform: TextureTransform
(set) metallicRoughnessTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the MetallicRoughness texture of this material.
*/ 
metallicRoughnessTextureTransform: TextureTransform;
/** 
* ```
(get) normalTextureTransform: TextureTransform
(set) normalTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the normal texture of this material.
*/ 
normalTextureTransform: TextureTransform;
/** 
* ```
(get) roughnessFactor: ScalarSignal
(set) roughnessFactor: ScalarSignal
```

Specifies the roughness factor.
*/ 
roughnessFactor: ScalarSignal | number;
/** 
*  
 * getBaseColor(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */ 
getBaseColor(): Promise<TextureBase | null>;

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
 * getMetallicRoughness(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */ 
getMetallicRoughness(): Promise<TextureBase | null>;

/** 
*  
 * getNormal(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */ 
getNormal(): Promise<TextureBase | null>;

/** 
*  
 * setNormal(texture: TextureBase | null): Promise<void>
 *  
 * 
 * Assign normal texture for this material.
 * Returns a promise that is resolved when the texture is assigned.
 */ 
setNormal(texture: TextureBase | null): Promise<void>;

}
