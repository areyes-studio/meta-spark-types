/// <reference path="../Materials.MaterialBase/index.d.ts" />
declare interface MeshSurface {
/** 
* ```
(get) name: string
(set) (Not Available)
```

Returns the surface name.
*/ 
name: string;
/** 
* 
 *  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 * 
 */ 
getMaterial(): Promise<MaterialBase>;

/** 
* 
 *  
 * setMaterial(MaterialBase): Promise
 *  
 * 
 * Returns a promise that is resolved when given material is associated with a given scene object.
 * 
 */ 
setMaterial(MaterialBase): Promise;

} 
