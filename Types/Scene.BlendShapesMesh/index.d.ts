/// <reference path="../Scene.BlendShape/index.d.ts" />
declare interface BlendShapesMesh {
/** 
* ```
(get) count: number
(set) (Not Available)
```

Retrieves the number of blend shapes
*/ 
count: number;
/** 
*  
 * getAtIndex(index: number): BlendShape
 *  
 * 
 * Returns the blendshape at the given index, with 0 being the first blendshape.
 */ 
getAtIndex(index: number): BlendShape;

/** 
*  
 * getByName(name: String): BlendShape
 *  
 * 
 * Returns the blendshape with the given name.
 */ 
getByName(name: String): BlendShape;

}
