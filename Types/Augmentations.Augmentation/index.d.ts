/// <reference path="../Signal<AugmentationState>/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../any/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
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
downloadProgress: ScalarSignal;
/** 
*  
 * instantiate(config: any): Promise<AugmentationInstance>
 *  
 */instantiate(config: any): Promise<AugmentationInstance>
 ;

} 
