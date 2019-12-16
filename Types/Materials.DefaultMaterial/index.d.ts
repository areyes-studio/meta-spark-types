/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface DefaultMaterial {
/** 
* ```
(get) reflective: TextureBase
(set) reflective: TextureBase
```

Specifies the reflective texture of the material.
*/ 
reflective: TextureBase;
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
(get) multiply: TextureBase
(set) multiply: TextureBase
```

Specifies the multiplicative texture of the material. This can be used for masking and other purposes.
*/ 
multiply: TextureBase;
/** 
* ```
  (get) emissive: TextureBase
  (set) emissive: TextureBase
  ```

  Specifies the emissive texture of the material.
*/ 
emissive: TextureBase;
/** 
* ```
  (get) emissiveTextureTransform: TextureTransform
  (set) emissiveTextureTransform: TextureTransformSignal
  ```

  Specifies the coordinates transform of the emissive texture of this material.
*/ 
emissiveTextureTransform: TextureTransform;
} 
