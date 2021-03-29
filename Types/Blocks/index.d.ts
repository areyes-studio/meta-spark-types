/// <reference path="../Scene.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Scene.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Scene.BlockSceneRoot/index.d.ts" />
declare class BlocksModule {
/**
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Get an object encapsulating all inputs for this Block.
*/
static readonly inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Gets an object encapsulating all outputs for this Block.
*/
static readonly outputs: BlockInstanceOutputs;
/**
*  
 * download(name: string): Promise<string>
 *  
 * 
 * Downloads a block with a given name, and returns a promise that is resolved with a given block's name that was used, or an error.
 * For blocks that are not downloadable - this becomes a no-op.
 * For blocks that were already downloaded and are already available - this becomes a no-op.
 * 
 * Downloading doesn't instantiate the block or add it to the scene, or make it's inputs/outputs available,
 * but makes sure that all the assets that are required are downloaded and are readily available.
 */
static download(name: string): Promise<string>;

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
