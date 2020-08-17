/// <reference path="../Reactive.Point4DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignalHistory/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface QuaternionSignal {
/** 
* ```
(get) eulerAngles: PointSignal
(set) (Not Available)
```
Represents the Euler angle from the `QuaternionSignal`, representing pitch, yaw, roll respectively.

**Note**: the order of rotations for the Euler angles is the same as in `Transform` class.
*/ 
eulerAngles: PointSignal;
/** 
* ```
(get) w: ScalarSignal
(set) (Not Available)
```

Represents the W component of the quaternion.
*/ 
w: ScalarSignal | number;
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X component of the quaternion.
*/ 
x: ScalarSignal | number;
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y component of the quaternion.
*/ 
y: ScalarSignal | number;
/** 
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component of the quaternion.
*/ 
z: ScalarSignal | number;
/** 
*  
 * conjugate(): QuaternionSignal
 *  
 * 
 * Returns the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.
 */ 
conjugate(): QuaternionSignal;

/** 
*  
 * angleAxis(): Point4DSignal
 *  
 * 
 * Returns the angle/axis representation of this quaternion. First element in the vector is angle in radians, with last 3 being X, Y, Z axis respectively.
 */ 
angleAxis(): Point4DSignal;

/** 
*  
 * mix(signal: QuaternionSignal, factor: ScalarSignal): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the linear interpolation between this and another signal by a given factor.
 */ 
mix(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal;

/** 
*  
 * slerp(signal: QuaternionSignal, factor: ScalarSignal): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the spherical linear interpolation between this and another signal by a given factor.
 */ 
slerp(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal;

/** 
*  
 * invert(): QuaternionSignal
 *  
 * 
 * Returns the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.
 */ 
invert(): QuaternionSignal;

/** 
*  
 * dot(signal: QuaternionSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 */ 
dot(signal: QuaternionSignal): ScalarSignal;

/** 
*  
 * mul(signal: QuaternionSignal): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 */ 
mul(signal: QuaternionSignal): QuaternionSignal;

/** 
*  
 * history(framesCount: number): QuaternionSignalHistory
 * history(framesCount: number, initialValues: Array<Rotation>): QuaternionSignalHistory
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */ 
history(framesCount: number): QuaternionSignalHistory;

history(framesCount: number, initialValues: Array<Rotation>): QuaternionSignalHistory;

/** 
*  
 * angleTo(signal: QuaternionSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angular distance between this quaternion and the provided quaternion, in radians.
 */ 
angleTo(signal: QuaternionSignal): ScalarSignal;

} 
