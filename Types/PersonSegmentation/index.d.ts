/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
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

Represents whether there is anybody in the scene (TRUE/FALSE), based on whether the percentage of foreground is larger than a threshold.
*/ 
const hasForeground: BoolSignal | boolean;
/** 
* ```
(get) (Not Available)
(set) isEnabled: BoolSignal
```

Specifies whether the segmentation should be enabled. Default value is 'true'.

**Note**: This API is not accessible in Blocks.
*/ 
const isEnabled: BoolSignal | boolean;
} 
export = PersonSegmentationModule;