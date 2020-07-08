/// <reference path="../Signal<AugmentationInstanceState>/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
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
 */remove(): Promise<boolean>
 ;

} 
