/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare interface Plane {
/** 
* ```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Specifies the horizontal offset, in 3D units.
*/ 
x: ScalarSignal | number;
/** 
* ```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
*/ 
width: ScalarSignal | number;
/** 
* ```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
*/ 
height: ScalarSignal | number;
/** 
* ```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Specifies the vertical offset, in 3D units.
*/ 
y: ScalarSignal | number;
/** 
* 
```
(get) material: MaterialBase
(set) material: MaterialBase
```

Specifies the material of the scene object.

*/ 
material: MaterialBase;
/** 
* 
 *  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 * 
 */getMaterial(): Promise<MaterialBase>
 ;

} 
