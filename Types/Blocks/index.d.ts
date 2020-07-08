/// <reference path="../string/index.d.ts" />
/// <reference path="../object/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare namespace BlocksModule {
/** 
*  
 * instantiate(prototypeName: string, initialState: object): Promise<BlockSceneRoot>
 *  
 * 
 * Instantiate a block asynchronously from a prototype.
 * Creation of blocks is bound to the same set of guidelines as `Scene.create()`.
 * Any `Block` object extends `SceneObjectBase`, inheriting all base properties
 * and allowing to use it as a child of any other object.
 * Please note, new blocks are assigned a globally unique `identifier`.
 */function instantiate(prototypeName: string, initialState: object): Promise<BlockSceneRoot>
 ;

} 
export = BlocksModule;