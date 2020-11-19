/// <reference path="../Scene.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Scene.BlockInstanceOutputs/index.d.ts" />
declare interface BlockSceneRoot {
/**
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Returns an object encapsulating all input setters for the Block Instance.
*/
inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Block Instance.
*/
outputs: BlockInstanceOutputs;
}
