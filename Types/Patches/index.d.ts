/// <reference path="../Patches.PatchesInputs/index.d.ts" />
/// <reference path="../Patches.PatchesOutputs/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare namespace PatchesModule {
/** 
* ```
(get) inputs: PatchesInputs
(set) (Not Available)
```

Returns an object encapsulating all inputs setters for the Patch Editor patches.
*/ 
const inputs: PatchesInputs;
/** 
* ```
(get) outputs: PatchesOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Patch Editor patches.
*/ 
const outputs: PatchesOutputs;
/** 
*  
 * getBooleanValue(name: string): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that is exported with `name` from the Patch Editor.
 */function getBooleanValue(name: string): BoolSignal
 ;

/** 
*  
 * getColorValue(name: string): RgbaSignal
 *  
 * 
 * Returns a `RgbaSignal` that is exported with `name` from the Patch Editor.
 */function getColorValue(name: string): RgbaSignal
 ;

/** 
*  
 * getPoint2DValue(name: string): Point2DSignal
 *  
 * 
 * Returns a `Point2DSignal` that is exported with `name` from the Patch Editor.
 */function getPoint2DValue(name: string): Point2DSignal
 ;

/** 
*  
 * getPointValue(name: string): PointSignal
 *  
 * 
 * Returns a `PointSignal` that is exported with `name` from the Patch Editor.
 */function getPointValue(name: string): PointSignal
 ;

/** 
*  
 * getPulseValue(name: string): EventSource<any>
 *  
 * 
 * Returns a pulse `EventSource` that wrapps a pulse that is exported with `name` from the Patch Editor.
 */function getPulseValue(name: string): EventSource<any>
 ;

/** 
*  
 * getScalarValue(name: string): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` that is exported with `name` from the Patch Editor.
 */function getScalarValue(name: string): ScalarSignal
 ;

/** 
*  
 * getStringValue(name: string): StringSignal
 *  
 * 
 * Returns a `StringSignal` that is exported with `name` from the Patch Editor.
 */function getStringValue(name: string): StringSignal
 ;

/** 
*  
 * getVectorValue(name: string): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` that is exported with `name` from the Patch Editor.
 */function getVectorValue(name: string): VectorSignal
 ;

/** 
*  
 * setBooleanValue(name: string, signal: BoolSignal | boolean): void
 *  
 * 
 * Sends a `BoolSignal` that is imported with `name` into the Patch Editor.
 */function setBooleanValue(name: string, signal: BoolSignal | boolean | boolean): void
 ;

/** 
*  
 * setColorValue(name: string, signal: RgbaSignal): void
 *  
 * 
 * Sends a `RgbaSignal` that is imported with `name` into the Patch Editor.
 */function setColorValue(name: string, signal: RgbaSignal): void
 ;

/** 
*  
 * setPoint2DValue(name: string, signal: Point2DSignal): void
 *  
 * 
 * Sends a `Point2DSignal` that is imported with `name` into the Patch Editor.
 */function setPoint2DValue(name: string, signal: Point2DSignal): void
 ;

/** 
*  
 * setPointValue(name: string, signal: PointSignal): void
 *  
 * 
 * Sends a `PointSignal` that is imported with `name` into the Patch Editor.
 */function setPointValue(name: string, signal: PointSignal): void
 ;

/** 
*  
 * setPulseValue(name: string, signal: EventSource<any>): void
 *  
 * 
 * Sends an `EventSource<any>` that is imported with `name` into the Patch Editor.
 * **Note**: The `Reactive.once()` method can be used to return an `EventSource<any>` that emits an empty event as soon as possible.
 */function setPulseValue(name: string, signal: EventSource<any>): void
 ;

/** 
*  
 * setScalarValue(name: string, signal: ScalarSignal | number): void
 *  
 * 
 * Sends a `ScalarSignal` that is imported with `name` into the Patch Editor.
 */function setScalarValue(name: string, signal: ScalarSignal | number | number): void
 ;

/** 
*  
 * setStringValue(name: string, signal: StringSignal | string): void
 *  
 * 
 * Sends a `StringSignal` that is imported with `name` into the Patch Editor.
 */function setStringValue(name: string, signal: StringSignal | string | string): void
 ;

/** 
*  
 * setVectorValue(name: string, signal: VectorSignal): void
 *  
 * 
 * Sends a `VectorSignal` that is imported with `name` into the Patch Editor.
 */function setVectorValue(name: string, signal: VectorSignal): void
 ;

} 
export = PatchesModule;