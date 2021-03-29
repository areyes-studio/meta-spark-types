/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../CameraInfo.CameraPosition/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class CameraInfoModule {
/**
* ```
(get) captureDevicePosition: StringSignal
(set) (Not Available)
```

Specifies a `CameraPosition` enum signal identifying the current camera in use on the device.
*/
static readonly captureDevicePosition: StringSignal;
/**
* ```
(get) effectSafeAreaInsets: Point4DSignal
(set) (Not Available)
```

Specifies a `Point4DSignal` indicating the insets of the effect safe area.
*/
static readonly effectSafeAreaInsets: Point4DSignal;
/**
* ```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/
static readonly isCapturingPhoto: BoolSignal;
/**
* ```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/
static readonly isRecordingVideo: BoolSignal;
/**
* ```
(get) previewScreenScale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing the scale of the preview's screen, i.e. the number of pixels per point.
*/
static readonly previewScreenScale: ScalarSignal;
/**
* ```
(get) previewSize: Point2DSignal
(set) (Not Available)
```

Specifies a `Point2DSignal` describing the size of the preview, in pixels.
*/
static readonly previewSize: Point2DSignal;
/**
 * The `CameraPosition` enum describes the direction the camera is facing.
 * @property BACK Indicates that the back-facing camera is in use.
 * @property FRONT Indicates that the front-facing camera is in use.
 * @property UNSPECIFIED Indicates that the orientation of the camera is unknown.
 */
static readonly CameraPosition: {
  BACK: "BACK",
  FRONT: "FRONT",
  UNSPECIFIED: "UNSPECIFIED",
}
}
export = CameraInfoModule;
