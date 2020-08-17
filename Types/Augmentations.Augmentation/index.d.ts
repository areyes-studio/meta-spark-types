/// <reference path="../Augmentations.AugmentationInstance/index.d.ts" />
/// <reference path="../Augmentations.AugmentationState/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Augmentation {
/** 
* ```
(get) state: Signal<AugmentationState>
(set) (Not Available)
```
*/ 
state: Signal<AugmentationState>;
/** 
* ```
(get) downloadProgress: ScalarSignal
(set) (Not Available)
```
*/ 
downloadProgress: ScalarSignal | number;
/** 
*  
 * instantiate(config: any): Promise<AugmentationInstance>
 *  
 */ 
instantiate(config: any): Promise<AugmentationInstance>;

} 
