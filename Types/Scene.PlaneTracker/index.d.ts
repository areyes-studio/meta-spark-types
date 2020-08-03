/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.TrackingMode/index.d.ts" />
/// <reference path="../Signal<Scene.TrackingMode>/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../Signal/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />
/// <reference path="../Textures.ExternalTexture/index.d.ts" />
declare interface PlaneTracker {
/** 
* ```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns tracking confidence level info.
This value indicates if PlaneTracker is currently tracking and how confident it is in reported results.
Possible values:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/ 
confidence: StringSignal | string;
/** 
* ```
 (get) trackingMode: SceneModule.TrackingMode
 (set) trackingMode: SceneModule.TrackingMode
 ```

 Specifies if this tracker object should track horizontal plane or moving object.

 **See Also**: `PlaneTracker.mode` and `PlaneTracker.setMode`.
*/ 
trackingMode: TrackingMode;
/** 
* ```
(get) mode: Signal<SceneModule.TrackingMode>
(set) mode: Signal<SceneModule.TrackingMode>
```

Specifies if this tracker object should track horizontal plane or moving object.

**Note:** on invalid value provided in setter, the mode will default to `SceneModule.TrackingMode.PLANE`.

**See Also**: `PlaneTracker.setMode`.
*/ 
mode: TrackingMode>;
/** 
*  
 * hitTest(screenLocation: Point2D): Point3D
 *  
 * 
 * Returns a point on tracked plane in local coordinates of PlaneTracker (in 3D units).
 * Returns null if tracked plane is not found at given screen point.
 */hitTest(screenLocation: Point2D): Point3D
 ;

/** 
*  
 * performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>
 * performHitTest(screenLocation: Point2D): Promise<Point3D>
 *  
 * 
 * Returns a promise that is resolved with a point on tracked plane in local coordinates of PlaneTracker (in 3D units)
 * or null if plane is not found at given screen location.
 */performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>
 ;

performHitTest(screenLocation: Point2D): Promise<Point3D>
 ;

/** 
*  
 * trackPoint(screenLocation: Point2D): void
 * trackPoint(screenX: number, screenY: number): void
 * trackPoint(screenLocation: Point2DSignal, gestureState: StringSignal): void
 *  
 * 
 * PlaneTracker origin is bound to a point in 3d space, located on detected plane.
 * This method updates PlaneTracker to track 3d point currently under given screen coordiantes.
 * This also triggers new plane detection, in result this object's transform will be modified.
 * 
 * Version with signal parameters can be used in touch gestures for continuous updating:
 * 
 *  
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   planeTracker.trackPoint(gesture.location, gesture.state);
 * });
 *  
 */trackPoint(screenLocation: Point2D): void
 ;

trackPoint(screenX: number, screenY: number): void
 ;

trackPoint(screenLocation: Point2DSignal, gestureState: StringSignal | string): void
 ;

/** 
*  
 * setMode(mode: Signal<SceneModule.TrackingMode>): void
 * setMode(mode: Signal<SceneModule.TrackingMode>, config: { fallback: SceneModule.TrackingMode }): void
 *  
 * 
 * Specifies if this tracker object should track horizontal plane or moving object.
 * 
 * **Note:** on invalid value provided in setter, the mode will default to `fallback` (or `SceneModule.TrackingMode.PLANE` if fallback is not specified).
 * 
 * **See Also**: `PlaneTracker.mode`.
 */setMode(mode: Signal<SceneModule.TrackingMode>): void
 ;

setMode(mode: Signal<SceneModule.TrackingMode>, config: { fallback: SceneModule.TrackingMode }): void
 ;

/** 
*  
 * trackTexture(texture: ImageTexture): void
 * trackTexture(texture: ExternalTexture): void
 *  
 * 
 * This method updates PlaneTracker to track against a texture.
 * The center of the texture is the origin of the PlaneTracker.
 * 
 * For the ExternalTexture version of this function call, care should be taken to
 * ensure that the texture is in an 'Available' state, else the pending or
 * fallback textures may be used instead.
 *  
 */trackTexture(texture: ImageTexture): void
 ;

trackTexture(texture: ExternalTexture): void
 ;

} 
