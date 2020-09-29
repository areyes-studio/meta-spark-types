/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface HairSegmentation {
/**
* 
  ```
  (get) averageColor: RgbaSignal
  (set) (Not Available)
  ```

  Average color of the person or hair in the scene.
  
*/
averageColor: RgbaSignal;
/**
* 
  ```
  (get) (Not Available)
  (set) enabled: BoolSignal
  ```

  Specifies whether the segmentation should be enabled. Default value is `true`.
              
*/
enabled: BoolSignal | boolean;
/**
* 
  ```
  (get) foregroundPercent: ScalarSignal
  (set) (Not Available)
  ```

  Represents the percentage of screen space occupied by person or hair.
  
*/
foregroundPercent: ScalarSignal | number;
/**
* 
  ```
  (get) hasForeground: BoolSignal
  (set) (Not Available)
  ```

  Represents whether there is person or hair in the scene (`true`/`false`).
  
*/
hasForeground: BoolSignal | boolean;
}
