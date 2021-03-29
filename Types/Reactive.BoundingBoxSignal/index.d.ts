/// <reference path="../Scene.BoundingBox/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
declare interface BoundingBoxSignal extends ISignal {
/**
* ```
(get) center: Point2DSignal
(set) (Not Available)
```

Represents the center of the bounding box, in normalized screen space units.
*/
center: Point2DSignal;
/**
* ```
(get) height: ScalarSignal
(set) (Not Available)
```

Represents the height of the bounding box, in normalized screen space units.
*/
height: ScalarSignal;
/**
* ```
(get) width: ScalarSignal
(set) (Not Available)
```

Represents the width of the bounding box, in normalized screen space units.
*/
width: ScalarSignal;
/**
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X-position of top left corner of the bounding box, in normalized screen space units.
*/
x: ScalarSignal;
/**
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y-position of top left corner of the bounding box, in normalized screen space units.
*/
y: ScalarSignal;
/**
* 
 *  
 * history(framesCount: number): SignalHistory<BoundingBox>
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */
history(framesCount: number): SignalHistory<BoundingBox>;

}
