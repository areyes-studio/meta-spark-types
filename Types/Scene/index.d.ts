/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Scene.Scene/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare namespace SceneModule {
/** 
* ```
(get) root: Scene
(set) (Not Available)
```

Returns an object that is the root of the scene tree. Other objects are accessed by walking down the scene tree from the root using the `SceneObjectBase.child` and `SceneObjectBase.find` methods.
*/ 
const root: Scene;
/** 
*  
 * create(className: string, initialState?: {[key: string]: any}): Promise<SceneObjectBase>
 *  
 * 
 * Create a scene object asynchronously.
 * When creating the scene objects, keep the following in mind:
 * - All objects must have an existing class.
 * - New objects always get assigned a globally unique `identifier`.`
 * - `initialState` is optional, but encouraged to be used.
 * - `name` in `initialState` is being used, unless it's not provided - then `dynamicObject` is used.
 * )
 */ 
function create(className: string, initialState?: {[key: string]: any}): Promise<any>;

/** 
*  
 * destroy(sceneObject: string | SceneObjectBase): Promise<void>
 *  
 * 
 * Destroy a scene object, asynchronously.
 * When destroying scene objects, keep the following in mind:
 *  - All bound properties will be automatically unbound on destruction.
 *  - Destroying a scene object automatically removes it from any parent.
 *  - Destroying a scene object automatically removes it all children from it.
 *  - Destroying a scene object that doesn't exist fails the `Promise`.
 *  - Destroying a scene object that was created in Studio fails the `Promise`.
 */ 
function destroy(sceneObject: any | string): Promise<void>;

/** 
*  
 * projectToScreen(point: PointSignal): Point2DSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 2D point value (in Screen Space) of the given world coordinate.
 * Screen space positions are represented in the range of `(0, 0)` to `(CameraInfo.previewSize.width, CameraInfo.previewSize.height)`,
 * with the coordinate start being the top left point of the screen and `previewSize.width/height` being the bottom right.
 * 
 * The values in the returned signal are not capped to the size of the screen space and can lie outside of the visible screen area.
 * 
 * This functionality can be used for precisely positioning 2D screen elements or to add additional effects that apply to the entire camera texture, based on contents of the scene.
 */ 
function projectToScreen(point: PointSignal): Point2DSignal;

/** 
*  
 * unprojectToFocalPlane(location: Point2DSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the Point2DSignal.
 * The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
 * This function can be combined with TouchGestures to create a 3d point signal.
 * 
 * 
 *  
 * var S = require('Scene')
 * TouchGestures.onPan().subscribe(function(gesture) {
 * var signal = S.unprojectToFocalPlane(gesture.location);
 * });
 *  
 */ 
function unprojectToFocalPlane(location: Point2DSignal): PointSignal;

/** 
*  
 * unprojectWithDepth(location: Point2DSignal, depth: number): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point value (in World Space, in current units) of the given screenSpace point from the Point2DSignal.
 * The z coordinate of the PointSignal will always be equal to the given depth value. The depth should be given in current units.
 * This function can be combined with TouchGestures to create a 3d point signal.
 *  
 * var Scene = require('Scene')
 * var TouchGestures = require('TouchGestures')
 * TouchGestures.onPan().subscribe(function(gesture) {
 * var signal = Scene.unprojectWithDepth(gesture.location, 0.5);
 * });
 *  
 */ 
function unprojectWithDepth(location: Point2DSignal, depth: number): PointSignal;

} 
export = SceneModule;