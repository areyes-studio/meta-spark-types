/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface DefaultMaterial {
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
