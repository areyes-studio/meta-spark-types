/// <reference path="../Augmentations.AugmentationInstanceState/index.d.ts" />
declare interface AugmentationInstance {
/** 
* ```
(get) state: Signal<AugmentationInstanceState>
(set) (Not Available)
```
*/ 
state: Signal<AugmentationInstanceState>;
/** 
*  
 * remove(): Promise<boolean>
 *  
 */ 
remove(): Promise<boolean>;

} 
