/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface FocalPlane {
/** 
* 
```
(get) width: ScalarSignal
(set) (Not Available)
```

Specifies the width of the focal plane. Measured in 3D units.

*/ 
width: ScalarSignal | number;
/** 
* 
```
(get) height: ScalarSignal
(set) (Not Available)
```

Specifies the height of the focal plane. Measured in 3D units.

*/ 
height: ScalarSignal | number;
/** 
* 
```
(get) distance: ScalarSignal
(set) (Not Available)
```

Specifies the distance between focal plane and camera. Measured in 3D units.

*/ 
distance: ScalarSignal | number;
} 
