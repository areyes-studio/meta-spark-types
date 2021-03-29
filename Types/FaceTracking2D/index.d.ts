/// <reference path="../FaceTracking2D.Face2D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class FaceTracking2DModule {
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
 * face(index: number): Face2D
 *  
 * 
 * Returns the `Face2D` object from the detected face array at the specified index.
 */
static face(index: number): Face2D;

}
export = FaceTracking2DModule;
