/// <reference path="../Reactive.Point3D/index.d.ts" />
declare interface ARPlaneTrackable {
/**
* ```
(get) center: Signal<Point3D>
(set) (Not Available)
```
Returns the position of the center of the surface plane in 3D space. This property is only valid for planes.
*/
center: Signal<Point3D>;
/**
* ```
(get) extent: Signal<Point3D>
(set) (Not Available)
```
Returns the extent of the surface plane along the x and z axes using the length and width of the plane centered
around the center point, respectively. This property is only valid for planes.
*/
extent: Signal<Point3D>;
/**
* ```
(get) normal: Signal<Point3D>
(set) (Not Available)
```
Returns the normal of the surface plane.
*/
normal: Signal<Point3D>;
}
