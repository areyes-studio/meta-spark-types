/// <reference path="../string/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface PatchesInputs {
/** 
*  
 * setBoolean(name: string, signal: BoolSignal | boolean): Promise<void>
 *  
 * 
 * Sends a `BoolSignal` to the Patch Editor under specified `name`.
 */setBoolean(name: string, signal: BoolSignal | boolean | boolean): Promise<void>
 ;

/** 
*  
 * setColor(name: string, signal: RgbaSignal): Promise<void>
 *  
 * 
 * Sends a `RgbaSignal` to the Patch Editor under specified `name`.
 */setColor(name: string, signal: RgbaSignal): Promise<void>
 ;

/** 
*  
 * setPoint(name: string, signal: PointSignal): Promise<void>
 *  
 * 
 * Sends a `PointSignal` to the Patch Editor under specified `name`.
 */setPoint(name: string, signal: PointSignal): Promise<void>
 ;

/** 
*  
 * setPoint2D(name: string, signal: Point2DSignal): Promise<void>
 *  
 * 
 * Sends a `Point2DSignal` to the Patch Editor under specified `name`.
 */setPoint2D(name: string, signal: Point2DSignal): Promise<void>
 ;

/** 
*  
 * setPulse(name: string, pulse: EventSource<any>): Promise<void>
 *  
 * 
 * Sends a `EventSource<any>` to the Patch Editor under specified `name`.
 * **Note**: The `Reactive.once()` method can be used to return an `EventSource<void>` that emits an empty event as soon as possible.
 */setPulse(name: string, pulse: EventSource<any>): Promise<void>
 ;

/** 
*  
 * setScalar(name: string, signal: ScalarSignal | number): Promise<void>
 *  
 * 
 * Sends a `ScalarSignal` to the Patch Editor under specified `name`.
 */setScalar(name: string, signal: ScalarSignal | number | number): Promise<void>
 ;

/** 
*  
 * setString(name: string, signal: StringSignal | string): Promise<void>
 *  
 * 
 * Sends a `StringSignal` to the Patch Editor under specified `name`.
 */setString(name: string, signal: StringSignal | string | string): Promise<void>
 ;

/** 
*  
 * setVector(name: string, signal: VectorSignal): Promise<void>
 *  
 * 
 * Sends a `VectorSignal` to the Patch Editor under specified `name`.
 */setVector(name: string, signal: VectorSignal): Promise<void>
 ;

} 
