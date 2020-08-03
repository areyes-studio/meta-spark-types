/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Signal<CameraPosition>/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace CameraInfoModule {
/** 
* ```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/ 
const isRecordingVideo: BoolSignal | boolean;
/** 
* ```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/ 
const isCapturingPhoto: BoolSignal | boolean;
/** 
* ```
(get) effectSafeAreaInsets: Point4DSignal
(set) (Not Available)
```

Specifies a `Point4DSignal` indicating the insets of the effect safe area.
*/ 
const effectSafeAreaInsets: Point4DSignal;
/** 
* ```
(get) previewSize: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` describing the size of the preview, in pixels.
*/ 
const previewSize: Point2DSignal;
/** 
* ```
(get) captureDevicePosition: Signal<CameraPosition>
(set) (Not Available)
```

Specifies a `CameraPosition` enum signal identifying the current camera in use on the device.
*/ 
const captureDevicePosition: Signal<CameraPosition>;
/** 
* ```
(get) previewScreenScale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing the scale of the preview's screen, i.e. the number of pixels per point.
*/ 
const previewScreenScale: ScalarSignal | number;
} 
export = CameraInfoModule;