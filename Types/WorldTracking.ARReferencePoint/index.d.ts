/// <reference path="../WorldTracking.ARPlaneTrackable/index.d.ts" />
/// <reference path="../WorldTracking.HitTestType/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface ARReferencePoint {
/**
* ```
(get) plane: ARPlaneTrackable
(set) (Not Available)
```
Returns the surface plane that the reference point is currently snapped to, if the optional `snapToPlane` argument was passed
when the `move()` method was called.
*/
plane: ARPlaneTrackable;
/**
* ```
(get) transform: TransformSignal
(set) (Not Available)
```
Returns the position, rotation, and scale of the entity in world coordinate space.
*/
transform: TransformSignal;
/**
*  
 * move({screenLocation: Point2DSignal, state: StringSignal, snapToPlane: ?boolean, planeType: ?HitTestType, fallbackToEstimatedPlanes: ?boolean}) : void
 *  
 * Moves the ARReferencePoint, optionally snapping to the nearest detected plane when panning if the optional `snapToPlane`
 * argument is set to `true`. Additionally, the type of surface plane that the reference point should snap to can be set via the optional
 * `planeType` argument. As the transforms of the `ARReferencePoint` are continuously tracked and updated, the `move()` method can be used
 * alongside touch gestures to continuously update a tracked AR object's transforms.
 * 
 * The optional 'fallbackToEstimatedPlanes' argument, when `snapToPlane` is also set to `true`, can be used to set whether to fall back to
 * using plane estimation, a less accurate estimate of real world surfaces than that provided by the default plane detection algorithm which
 * continuously analyzes the scene to detect planes in the view.
 * 
 *  
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   referencePoint.move({screenLocation: gesture.location, state: gesture.state);
 * });
 */
move({screenLocation: Point2DSignal, state: StringSignal, snapToPlane: ?boolean, planeType: ?HitTestType, fallbackToEstimatedPlanes: ?boolean}) : void;

}