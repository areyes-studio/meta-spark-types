/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../FaceTracking.Face/index.d.ts" />
declare namespace FaceTrackingModule {
/** 
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the number of faces tracked in the scene.
*/ 
const count: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) isEnabled: BoolSignal
```

Specifies a `BoolSignal` that takes the value of `true` whenever the Face Tracker should be run, and the value of `false` otherwise. Default value is `true`
*/ 
const isEnabled: BoolSignal;
/** 
* 
 *  
 * face(index: number): Face
 *  
 * 
 * Returns the `Face` object from the detected face array at the specified index.
 * 
 * **Note**: this method will throw for face index lower than 0 and greater or equal to
 * 10.
 */function face(index: number): Face
 ;

} 
export = FaceTrackingModule;