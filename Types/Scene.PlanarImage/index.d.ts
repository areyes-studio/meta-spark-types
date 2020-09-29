/// <reference path="../Materials.MaterialBase/index.d.ts" />
declare interface PlanarImage {
/**
* ```
(get) material: MaterialBase | null
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null;
/**
*  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 */
getMaterial(): Promise<MaterialBase>;

}
