/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Materials.ShaderProcessor/index.d.ts" />
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
 * clone(material: string | MaterialBase, initialState?: {[key: string]: any}): Promise<MaterialBase>
 *  
 * 
 * Clone a material asynchronously.
 * When creating the materials, keep the following in mind:
 * - Cloning a material with an identifier that doesn't exist fails the `Promise`.
 * - New materials always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 * - All properties that are using Signal types get assigned a ConstSignal with last value. Use initialState to override it.
 */
function clone(material: MaterialBase | string, initialState?: {[key: string]: any}): Promise<MaterialBase>;

/**
*  
 * create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>
 *  
 * 
 * Create a material asynchronously.
 * When creating the materials, keep the following in mind:
 * - All materials must have an existing class.
 * - New materials always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 */
function create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>;

/**
*  
 * destroy(material: string | MaterialBase): Promise<void>
 *  
 * 
 * Destroy a material asynchronously.
 * When destroying the materials, keep the following in mind:
 * - All bound properties will be automatically unbound on destruction.
 * - Destroying a material that doesn't exist fails the `Future`.
 * - Destroying a set of Materials that was created in Studio fails the `Future`.
 */
function destroy(material: MaterialBase | string): Promise<void>;

/**
*  
 * findFirst(name: string): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material of a requested name or null if none was found.
 * **See Also**: `Materials.findUsingPattern`, `Materials.getAll`.
 */
function findFirst(name: string): Promise<MaterialBase | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the materials matching the name pattern or empty array if none was found.
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the materials.
 * `findUsingPattern("*A")` will retrieve all of the materials suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the materials prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the materials containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Materials.getAll`, `Materials.findFirst`.
 */
function findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>;

/**
*  
 * get(materialName: string): MaterialBase
 *  
 * 
 * Returns a `MaterialBase` class that represents the material specified by the `materialName` parameter. The materials are defined in the AR Studio project.
 * An exception is thrown when the identifier isn't found in the project.
 * 
 * **See Also**: `MaterialBase.name`.
 */
function get(materialName: string): MaterialBase;

/**
*  
 * getAll(): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the materials.
 * **See Also**: `Materials.findUsingPattern`, `Materials.findFirst`.
 */
function getAll(): Promise<Array<MaterialBase>>;

}
export = MaterialsModule;
