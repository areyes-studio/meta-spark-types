/// <reference path="../FaceTracking.Cheek/index.d.ts" />
/// <reference path="../FaceTracking.Chin/index.d.ts" />
/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../FaceTracking.Eyebrow/index.d.ts" />
/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Scene.FaceMesh/index.d.ts" />
/// <reference path="../Scene.FaceTracker/index.d.ts" />
/// <reference path="../FaceTracking.Forehead/index.d.ts" />
/// <reference path="../FaceTracking.Mouth/index.d.ts" />
/// <reference path="../FaceTracking.Nose/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class FaceTrackingModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the number of faces tracked in the scene.
*/
static readonly count: ScalarSignal;
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
 */
static createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>;

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
 */
static createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>;

/**
*  
 * face(index: number): Face
 *  
 * 
 * Returns the `Face` object from the detected face array at the specified index.
 */
static face(index: number): Face;

}
export = FaceTrackingModule;
