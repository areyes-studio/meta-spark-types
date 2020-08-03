/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Signal<Materials.CullMode>/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../String/index.d.ts" />
declare interface MaterialBase {
/** 
* ```
(get) alphaCutoff: ScalarSignal
(set) alphaCutoff: ScalarSignal
```

Specifies a number between 0.0 and 1.0.
*/ 
alphaCutoff: ScalarSignal | number;
/** 
* ```
(get) cullMode: Signal<MaterialsModule.CullMode>
(set) cullMode: Signal<MaterialsModule.CullMode>
```

Specifies the material cull mode.
*/ 
cullMode: CullMode>;
/** 
* ```
(get) diffuse: TextureBase
(set) diffuse: TextureBase
```

Specifies the texture that forms the basis of this material.
*/ 
diffuse: TextureBase;
/** 
* ```
(get) diffuseTextureTransform: TextureTransform
(set) diffuseTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the diffuse texture of this material.
*/ 
diffuseTextureTransform: TextureTransform;
/** 
* ```
(get) doubleSided: BoolSignal
(set) doubleSided: BoolSignal
```

Indicates whether the material can be seen from both sides when rendering the scene.
**Note**: When `FALSE`, only the side specified by object's **Cull Mode** is rendered.
*/ 
doubleSided: BoolSignal | boolean;
/** 
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique identifier for the material.
*/ 
identifier: string;
/** 
* ```
(get) name: string
(set) (Not Available)
```

Specifies the unique identifier for the material name. This value is specified in AR Studio at design time.
**See Also**: `MaterialsModule.get`.
*/ 
name: string;
/** 
* ```
(get) opacity: ScalarSignal
(set) opacity: ScalarSignal
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
*/ 
opacity: ScalarSignal | number;
/** 
*  
 * getDiffuse(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getDiffuse(): Promise<TextureBase>
 ;

/** 
*  
 * setTexture(signal: ShaderSignal, config: {textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures}): void
 *  
 * 
 * Assigns a ShaderSignal to the specified texture slot.
 */setTexture(signal: ShaderSignal, config: {textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures}): void
 ;

/** 
*  
 * setTextureSlot(textureSlotName: String, signal: ShaderSignal): void
 *  
 * 
 * Assigns a ShaderSignal to the specified texture slot.
 */setTextureSlot(textureSlotName: String, signal: ShaderSignal): void
 ;

} 
