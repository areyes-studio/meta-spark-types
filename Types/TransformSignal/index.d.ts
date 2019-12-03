/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../PointSignal/index.d.ts" />
/// <reference path="../ScaleSignal/index.d.ts" />
/// <reference path="../TransformSignal/index.d.ts" />
/// <reference path="../VectorSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../this/index.d.ts" />
declare interface TransformSignal {
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Y-axis of the local coordinate system.
*/ 
y: ScalarSignal;
/** 
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Z-axis of the local coordinate system.
*/ 
z: ScalarSignal;
/** 
* ```
(get) rotationY: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Y-axis of the rotated local coordinate system, in radians. The signal value is in the range [-PI/2, PI/2].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationY: ScalarSignal;
/** 
* ```
(get) rotationX: ScalarSignal
(set) (Not Available)
```

Represents rotation about the X-axis of the local coordinate system, in radians. The signal value is in the range [-PI, PI].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object, therefore it is always performed in the object's local coordinate system.
*/ 
rotationX: ScalarSignal;
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the offset along the X-axis of the local coordinate system.
*/ 
x: ScalarSignal;
/** 
* ```
(get) scaleX: ScalarSignal
(set) (Not Available)
```

Represents scale along the X-axis of the local coordinate system.
*/ 
scaleX: ScalarSignal;
/** 
* ```
(get) rotationZ: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Z-axis of the rotated local coordinate system, in radians. The signal value is in the range [-PI, PI].

**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/ 
rotationZ: ScalarSignal;
/** 
* ```
(get) scaleY: ScalarSignal
(set) (Not Available)
```

Represents scale along the Y-axis of the local coordinate system.
*/ 
scaleY: ScalarSignal;
/** 
* ```
(get) scaleZ: ScalarSignal
(set) (Not Available)
```

Represents scale along the Z-axis of the local coordinate system.
*/ 
scaleZ: ScalarSignal;
/** 
* ```
(get) position: PointSignal
(set) (Not Available)
```

Represents the offset in the local coordinate system.
*/ 
position: PointSignal;
/** 
* ```
(get) scale: ScaleSignal
(set) (Not Available)
```

Represents scale in the local coordinate system.
*/ 
scale: ScaleSignal;
/** 
*  
 * inverse(): TransformSignal
 *  
 * 
 * Returns a signal with the value that is equal to the inverted transformation value of the given signal at any point of time.
 */inverse(): TransformSignal
 ;

/** 
*  
 * applyTo(transform: TransformSignal): TransformSignal
 * applyTo(point: PointSignal): PointSignal
 * applyTo(vector: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is equal to the value of the provided transformation/point/vector with the transformation of the current `TransformSignal` applied to it.
 */applyTo(transform: TransformSignal): TransformSignal
 ;

applyTo(point: PointSignal): PointSignal
 ;

applyTo(vector: VectorSignal): VectorSignal
 ;

/** 
*  
 * expSmooth(dampFactor: number): TransformSignal
 *  
 * 
 * Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
 * 
 * **Note**: The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to be a rigid body transformation. The rotation component is smoothed in spherical coordinates using Slerp (spherical linear interpolation).
 * 
 * **Note**: See also `ReactiveModule.expSmooth`.
 */expSmooth(dampFactor: number): TransformSignal
 ;

/** 
*  
 * delayBy(timeSpan: {milliseconds: number}): this
 *  
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */delayBy(timeSpan: {milliseconds: number}): this
 ;

} 
