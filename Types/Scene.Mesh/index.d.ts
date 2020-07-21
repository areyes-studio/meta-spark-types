/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.BlendShapesMesh/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare interface Mesh {
/** 
* 
```
(get) material: MaterialBase
(set) material: MaterialBase
```

Specifies the material of the scene object.

*/ 
material: MaterialBase;
/** 
* ```
(get) blendShapes: BlendShapesMesh
(set) (Not Available)
```

Returns the set of blendshapes that this mesh contains.
*/ 
blendShapes: BlendShapesMesh;
/** 
* ```
(get) materialIdentifier: string
(set) (Not Available)
```

Specifies the unique id of material for Mesh.
*/ 
materialIdentifier: string;
/** 
* ```
(get) prefabName: string
(set) (Not Available)
```

Specifies the name of prefab for Mesh. This is the unique identifier of the prefab.
*/ 
prefabName: string;
/** 
* 
 *  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 * 
 */getMaterial(): Promise<MaterialBase>
 ;

/** 
*  
 * getPrefab(): Promise<Prefab>
 *  
 * 
 * Returns a promise that is resolved with the prefab associated with a given mesh object or null if no prefab was assigned.
 */getPrefab(): Promise<Prefab>
 ;

/** 
*  
 * getBlendShapes(): Promise<Array<BlendShape>>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with `array of blend Shapes` or an error.
 */getBlendShapes(): Promise<Array<BlendShape>>
 ;

} 
