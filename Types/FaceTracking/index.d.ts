/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
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
const count: ScalarSignal | number;
/** 
* ```
(get) (Not Available)
(set) isEnabled: BoolSignal | boolean
```

Specifies a `BoolSignal` that takes the value of `true` whenever the Face Tracker should be run, and the value of `false` otherwise. Default value is `true`.
*/ 
const isEnabled: BoolSignal | boolean;
/** 
*  
 * createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>
 *  
 * 
 * Create a 'FaceMesh' scene object asynchronously.
 * When creating the scene objects, keep the following in mind:
 *   - All objects must have an existing class.
 *   - New objects always get assigned a globally unique `name` and `identifier`.
 *   - `initialState` is optional, but encouraged to be used.
 */function createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>
 ;

/** 
*  
 * createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>
 *  
 * 
 * Create a 'FaceTracker' scene object asynchronously.
 * When creating the scene objects, keep the following in mind:
 *   - All objects must have an existing class.
 *   - New objects always get assigned a globally unique `name` and `identifier`.
 *   - `initialState` is optional, but encouraged to be used.
 */function createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>
 ;

/** 
*  
 * face(index: number): Face
 *  
 * 
 * Returns the `Face` object from the detected face array at the specified index.
 */function face(index: number): Face
 ;

} 
export = FaceTrackingModule;