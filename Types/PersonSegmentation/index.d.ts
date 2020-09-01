/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace PersonSegmentationModule {
/** 
* ```
(get) foregroundPercent: ScalarSignal
(set) (Not Available)
```

Represents the percentage of screen space occupied by a person/people.
*/ 
const foregroundPercent: ScalarSignal | number;
/** 
* ```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is anybody in the scene (`true`/`false`), based on whether the percentage of foreground is larger than a threshold.
*/ 
const hasForeground: BoolSignal | boolean;
/** 
* ```
(get) (Not Available)
(set) isEnabled: BoolSignal | boolean
```

Specifies whether the segmentation should be enabled. Default value is 'true'.
*/ 
const isEnabled: BoolSignal | boolean;
}
export = PersonSegmentationModule;
