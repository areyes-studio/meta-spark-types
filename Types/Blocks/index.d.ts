/// <reference path="../Scene.BlockSceneRoot/index.d.ts" />
declare class BlocksModule {
/**
*  
 * instantiate(prototypeName: string, initialState: {[key: string]: any}): Promise<BlockSceneRoot>
 *  
 * 
 * Instantiate a Block asynchronously from a prototype.
 * When instantiating blocks, keep the following in mind:
 * - Creation of Blocks is bound to the same set of guidelines as `Scene.create()`.
 * - New blocks always get assigned a globally unique `identifier`.`
 * - `initialState` is optional, but encouraged to be used.
 * - `initialState` can contain any `key: value` pair for any settable property of a `Block` class (e.g. `hidden`).
 * - `name` in `initialState` is being used, unless it's not provided - then `dynamicBlock` is used.
 * - Block's inputs and outputs are not accessible until `SceneObjectBase.addChild()` call finishes
 */
static instantiate(prototypeName: string, initialState: {[key: string]: any}): Promise<BlockSceneRoot>;

}
export = BlocksModule;
