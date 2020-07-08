/// <reference path="../ConstBoolSignal/index.d.ts" />
declare interface OutputVisibility {
/** 
* ```
(get) forPreviewOutput: ConstBoolSignal
(set) forPreviewOutput: BoolSignal
```

Specifies whether the object is visible on the preview output.
*/ 
forPreviewOutput: ConstBoolSignal;
/** 
* ```
(get) forCaptureOutput: ConstBoolSignal
(set) forCaptureOutput: BoolSignal
```

Specifies whether the object is visible on the capture output.
*/ 
forCaptureOutput: ConstBoolSignal;
/** 
* ```
(get) forOverlayOutput: ConstBoolSignal
(set) forOverlayOutput: BoolSignal
```

Specifies whether the object is visible on the overlay output.
*/ 
forOverlayOutput: ConstBoolSignal;
} 
