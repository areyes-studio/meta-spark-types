/// <reference path="../Scene.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Scene.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Scene.BlockSceneRoot/index.d.ts" />
declare namespace BlocksModule {
/**
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Get an object encapsulating all inputs for this Block.
*/
const inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Gets an object encapsulating all outputs for this Block.
*/
const outputs: BlockInstanceOutputs;
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
function download(name: string): Promise<string>;

/**
*  
 * instantiate(prototypeName: string, initialState: object): Promise<BlockSceneRoot>
 *  
 * 
 * Instantiate a Block asynchronously from a prototype.
 * Creation of Blocks is bound to the same set of guidelines as `Scene.create()`.
 * Any `Block` object extends `SceneObjectBase`, inheriting all base properties
 * and allowing to use it as a child of any other object.
 * Please note, new Blocks are assigned a globally unique `identifier`.
 */
function instantiate(prototypeName: string, initialState: object): Promise<BlockSceneRoot>;

}
export = BlocksModule;
