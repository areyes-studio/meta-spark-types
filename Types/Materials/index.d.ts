/// <reference path="../Materials.ShaderProcessor/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
declare namespace MaterialsModule {
/** 
* ```
(get) postProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the post-rendering pass.
*/ 
const postProcessor: ShaderProcessor;
/** 
* ```
(get) preProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the pre-rendering pass.
*/ 
const preProcessor: ShaderProcessor;
/** 
*  
 * findFirst(name: string): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material of a requested name or null if none was found.
 */function findFirst(name: string): Promise<MaterialBase>
 ;

/** 
*  
 * findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the materials matching the name pattern or empty array if none was found.
 */function findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<MaterialBase>>
 ;

/** 
*  
 * get(materialName: string): MaterialBase
 *  
 * 
 * Returns a `MaterialBase` class that represents the material specified by the `materialName` parameter. The materials are defined in the AR Studio project.
 */function get(materialName: string): MaterialBase
 ;

/** 
*  
 * getAll(): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the materials.
 */function getAll(): Promise<Array<MaterialBase>>
 ;

} 
export = MaterialsModule;