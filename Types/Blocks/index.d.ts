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