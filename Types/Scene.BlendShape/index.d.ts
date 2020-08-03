/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare interface BlendShape {
/** 
* ```
(get) weight: ScalarSignal
(set) weight: ScalarSignal
```

Specifies the weight of the blend shape.
*/ 
weight: ScalarSignal | number;
/** 
* ```
(get) prefabName: string
(set) (Not Available)
```

Specifies the name of prefab for BlendShape. This is the unique identifier of the prefab.
*/ 
prefabName: string;
/** 
* ```
(get) name: string
(set) (Not Available)
```

Retrieves the name of the BlendShape.
*/ 
name: string;
/** 
*  
 * getPrefab(): Promise<Prefab>
 *  
 * 
 * Returns a promise that is resolved with the prefab associated with a given BlendShape or null if no prefab was assigned.
 */getPrefab(): Promise<Prefab>
 ;

} 
