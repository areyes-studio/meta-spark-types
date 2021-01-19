/// <reference path="../WorldTracking.ARReferencePoint/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../WorldTracking.HitTestResult/index.d.ts" />
/// <reference path="../WorldTracking.HitTestType/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../WorldTracking.TrackingState/index.d.ts" />
/// <reference path="../WorldTracking.TrackingStateReason/index.d.ts" />
declare namespace WorldTrackingModule {
/**
* ```
(get) realWorldScaleActive: BoolSignal
(set) (Not Available)
```
Returns true if the world tracker has entered a state in which the AR effect can be shown at real world scale.
*/
const realWorldScaleActive: BoolSignal | boolean;
/**
* ```
(get) realWorldScaleSupported: BoolSignal
(set) (Not Available)
```
Returns true if real world scale for world tracking is available on the current device.
*/
const realWorldScaleSupported: BoolSignal | boolean;
/**
* ```
(get) state: Signal<TrackingState>
(set) (Not Available)
```
Returns the current state of the world tracker.
*/
const state: Signal<TrackingState>;
/**
* ```
(get) stateReason: Signal<TrackingStateReason>
(set) (Not Available)
```
Returns the reason the world tracker is experiencing limited tracking quality,
if the value returned by `WorldTrackingModule.state` is `LIMITED`.
*/
const stateReason: Signal<TrackingStateReason>;
/**
*  
 * addReferencePoint({worldPosition: Point3D, trackable: ?ARTrackable}) : Promise<ARReferencePoint>
 *  
 * Adds a reference point, also referred to as an anchor, at the world position provided. Optionally, the reference point can
 * be attached to a trackable when specified with the optional `trackable` argument.
 */
function addReferencePoint({worldPosition: Point3D, trackable: ?ARTrackable}) : Promise<ARReferencePoint>;

/**
*  
 * deleteReferencePoint(referencePoint: ARReferencePoint) : void
 *  
 * Deletes a reference point that was added using the `addReferencePoint()` method.
 */
function deleteReferencePoint(referencePoint: ARReferencePoint) : void;

/**
*  
 * hitTest({screenLocation: Point2D, hitTestType: ?HitTestType, fallbackToEstimatedPlanes: ?boolean}) : Promise<Array<HitTestResult>>
 *  
 * Returns the point of intersection of the hit test on all intersecting planes, both horizontal and vertical, in the WorldTracker's
 * local coordinates (in 3D units), as well as the associated trackables (planes).
 * 
 * The results of the hit test are sorted in order of increasing distance to the camera.
 * 
 * The optional `hitTestType` argument can be used to specify the type of plane to hit test against, for example, horizontal planes only.
 * 
 * The optional 'fallbackToEstimatedPlanes' argument can be used to set whether to fall back to using plane estimation, a less accurate
 * estimate of real world surfaces than tha provided by the default plane detection algorithm which continuously analyzes the scene to
 * detect planes in the view."
 */
function hitTest({screenLocation: Point2D, hitTestType: ?HitTestType, fallbackToEstimatedPlanes: ?boolean}) : Promise<Array<HitTestResult>>;

/**
*  
 * onTrackableAdded(trackable: ARTrackable) : void
 *  
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits an ARTrackable each time a trackable is detected in the view.
 */
function onTrackableAdded(trackable: ARTrackable) : void;

/**
*  
 * onTrackableDeleted(trackable: ARTrackable) : void
 *  
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits an ARTrackable each time a trackable is deleted.
 */
function onTrackableDeleted(trackable: ARTrackable) : void;

}
export = WorldTrackingModule;
