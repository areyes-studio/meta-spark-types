/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../FaceTracking.Cheek/index.d.ts" />
/// <reference path="../FaceTracking.Chin/index.d.ts" />
/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../FaceTracking.Eyebrow/index.d.ts" />
/// <reference path="../FaceTracking.Forehead/index.d.ts" />
/// <reference path="../FaceTracking.Mouth/index.d.ts" />
/// <reference path="../FaceTracking.Nose/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface Face {
/** 
* ```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the face transformation relative to camera coordinate system.
**Note**: `cameraTransform.applyTo(point)`, where `point` is a point in face local coordinate system, returns a point in camera local coordinate system.
*/ 
cameraTransform: TransformSignal;
/** 
* ```
(get) chin: Chin
(set) (Not Available)
```

Specifies a `Chin` object describing the attributes of the chin.
*/ 
chin: Chin;
/** 
* ```
(get) forehead: Forehead
(set) (Not Available)
```

Specifies a `Forehead` object describing the attributes of the forehead.
*/ 
forehead: Forehead;
/** 
* ```
(get) id: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the unique ID assigned to a face. An ID is generated every time a face is detected and tracked in the scene.
When a face is lost and then tracked again, a new ID is generated even if it is the same person.
*/ 
id: StringSignal | string;
/** 
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

A `BoolSignal` indicating whether the face was tracked this frame.
If the face was not tracked, other properties represent the most recent tracked frame.
*/ 
isTracked: BoolSignal | boolean;
/** 
* ```
(get) leftCheek: Cheek
(set) (Not Available)
```

Specifies a `Cheek` object describing the attributes of the left cheek.
*/ 
leftCheek: Cheek;
/** 
* ```
(get) leftEye: Eye
(set) (Not Available)
```

Specifies an `Eye` object describing the attributes of the left eye.
*/ 
leftEye: Eye;
/** 
* ```
(get) leftEyebrow: Eyebrow
(set) (Not Available)
```

Specifies an `Eyebrow` object describing the attributes of the left eyebrow.
*/ 
leftEyebrow: Eyebrow;
/** 
* ```
(get) mouth: Mouth
(set) (Not Available)
```

Specifies a `Mouth` object describing the attributes of the mouth.
*/ 
mouth: Mouth;
/** 
* ```
(get) nose: Nose
(set) (Not Available)
```

Specifies a `Nose` object describing the attributes of the nose.
*/ 
nose: Nose;
/** 
* ```
(get) rightCheek: Cheek
(set) (Not Available)
```

Specifies a `Cheek` object describing the attributes of the right cheek.
*/ 
rightCheek: Cheek;
/** 
* ```
(get) rightEye: Eye
(set) (Not Available)
```

Specifies an `Eye` object describing the attributes of the right eye.
*/ 
rightEye: Eye;
/** 
* ```
(get) rightEyebrow: Eyebrow
(set) (Not Available)
```

Specifies an `Eyebrow` object describing the attributes of the right eyebrow.
*/ 
rightEyebrow: Eyebrow;
/** 
*  
 * point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal
 *  
 * 
 * Returns a `PointSignal` object representing a point in the face local coordinate system that corresponds to a UV point on the facial mesh texture map.
 * **See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
 */ 
point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal;

} 
