/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare interface Scene {
/** 
* ```
(get) hidden: BoolSignal
(set) hidden: void
```

Specifies whether the scene and its descendants are hidden.
*/ 
hidden: BoolSignal;
/** 
*  
 * child(name: string): SceneObjectBase
 *  
 * 
 * Returns a child object by name. An exception is thrown if the object isn't found.
 */child(name: string): any
 ;

/** 
*  
 * find(name: string): SceneObjectBase
 *  
 * 
 * Returns a descendant object by name. An exception is thrown if the object isn't found or if more than one is found.
 */find(name: string): any
 ;

/** 
*  
 * findAll(name: string, config: {recursive: boolean}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the scene objects with given name or empty array if none was found.
 */findAll(name: string, config: {recursive: boolean}): Promise<Array<any>>
 ;

/** 
*  
 * findByPath(pathQuery: string, config: {limit: number}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with the all occurances of scene objects matching the path query or empty array if none was found.
 */findByPath(pathQuery: string, config: {limit: number}): Promise<Array<any>>
 ;

/** 
*  
 * findFirst(name: string, config: {recursive: boolean}): Promise<SceneObjectBase>
 *  
 * 
 * Returns a promise that is resolved with the first occurance of scene object with given name or null if none was found.
 */findFirst(name: string, config: {recursive: boolean}): Promise<any>
 ;

} 
