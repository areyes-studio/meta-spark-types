/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface OutputVisibility {
/**
* ```
(get) forCaptureOutput: BoolSignal
(set) forCaptureOutput: BoolSignal
```

Specifies whether the object is visible on the capture output.
*/
forCaptureOutput: BoolSignal;
/**
* ```
(get) forOverlayOutput: BoolSignal
(set) forOverlayOutput: BoolSignal
```

Specifies whether the object is visible on the overlay output.
*/
forOverlayOutput: BoolSignal;
/**
* ```
(get) forPreviewOutput: BoolSignal
(set) forPreviewOutput: BoolSignal
```

Specifies whether the object is visible on the preview output.
*/
forPreviewOutput: BoolSignal;
}
