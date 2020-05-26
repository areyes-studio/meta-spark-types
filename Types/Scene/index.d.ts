/// <reference path="../Scene.Scene/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
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
 * unprojectToFocalPlane(location: Point2DSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the Point2DSignal.
 * The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
 */function unprojectToFocalPlane(location: Point2DSignal): PointSignal
 ;

/** 
*  
 * unprojectWithDepth(location: Point2DSignal, depth: number): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point value (in World Space, in current units) of the given screenSpace point from the Point2DSignal.
 * The z coordinate of the PointSignal will always be equal to the given depth value. The depth should be given in current units.
 */function unprojectWithDepth(location: Point2DSignal, depth: number): PointSignal
 ;

} 
export = SceneModule;