/// <reference path="../Augmentations.AugmentationInstance/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface Augmentation {
/**
* ```
(get) downloadProgress: ScalarSignal
(set) (Not Available)
```
*/
downloadProgress: ScalarSignal | number;
/**
* ```
(get) state: StringSignal
(set) (Not Available)
```

Return `StringSignal` with possible values defined by enum `Augmentation.AugmentationState`
*/
state: StringSignal | string;
/**
*  
 * instantiate(config: {[key: string]: any}): Promise<AugmentationInstance>
 *  
 * 
 */
instantiate(config: {[key: string]: any}): Promise<AugmentationInstance>;

}