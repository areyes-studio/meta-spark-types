/// <reference path="../Scene.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Scene.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.Point2DSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface BlockSceneRoot {
/** 
* 
```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Returns an object encapsulating all input setters for the Block Instance.

*/ 
inputs: BlockInstanceInputs;
/** 
* 
```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Block Instance.

*/ 
outputs: BlockInstanceOutputs;
/** 
*  
 * getBooleanOutput(name: String): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` for a named Block output.
 */ 
getBooleanOutput(name: String): BoolSignal;

/** 
*  
 * getColorOutput(name: String): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` for a named Block output.
 */ 
getColorOutput(name: String): ColorSignal;

/** 
*  
 * getPixelPointOutput(name: String): Point2DSignal
 *  
 * 
 * Returns a `Point2DSignal` for a named Block output.
 */ 
getPixelPointOutput(name: String): Point2DSignal;

/** 
*  
 * getPointOutput(name: String): PointSignal
 *  
 * 
 * Returns a `PointSignal` for a named Block output.
 */ 
getPointOutput(name: String): PointSignal;

/** 
*  
 * getScalarOutput(name: String): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` for a named Block output.
 */ 
getScalarOutput(name: String): ScalarSignal;

/** 
*  
 * getShaderOutput(name: String): ShaderSignal
 *  
 * 
 * Returns a `ShaderSignal` for a named Block output.
 */ 
getShaderOutput(name: String): ShaderSignal;

/** 
*  
 * getStringOutput(name: String): StringSignal
 *  
 * 
 * Returns a `StringSignal` for a named Block output.
 */ 
getStringOutput(name: String): StringSignal;

/** 
*  
 * getVectorOutput(name: String): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` for a named Block output.
 */ 
getVectorOutput(name: String): VectorSignal;

/** 
*  
 * setBooleanInput(name: String, signal: BoolSignal): void
 *  
 * 
 * Binds a `BoolSignal` to a named Block input.
 */ 
setBooleanInput(name: String, signal: BoolSignal | boolean): void;

/** 
*  
 * setColorInput(name: String, signal: ColorSignal): void
 *  
 * 
 * Binds a `ColorSignal` to a named Block input.
 */ 
setColorInput(name: String, signal: ColorSignal): void;

/** 
*  
 * setPixelPointInput(name: String, signal: Point2DSignal): void
 *  
 * 
 * Binds a `Point2DSignal` to a named Block input.
 */ 
setPixelPointInput(name: String, signal: Point2DSignal): void;

/** 
*  
 * setPointInput(name: String, signal: PointSignal): void
 *  
 * 
 * Binds a `PointSignal` to a named Block input.
 */ 
setPointInput(name: String, signal: PointSignal): void;

/** 
*  
 * setScalarInput(name: String, signal: ScalarSignal): void
 *  
 * 
 * Binds a `ScalarSignal` to a named Block input.
 */ 
setScalarInput(name: String, signal: ScalarSignal | number): void;

/** 
*  
 * setShaderInput(name: String, signal: ShaderSignal): void
 *  
 * 
 * Binds a `ShaderSignal` to a named Block input.
 */ 
setShaderInput(name: String, signal: ShaderSignal): void;

/** 
*  
 * setStringInput(name: String, signal: StringSignal): void
 *  
 * 
 * Binds a `StringSignal` to a named Block input.
 */ 
setStringInput(name: String, signal: StringSignal | string): void;

/** 
*  
 * setVectorInput(name: String, signal: VectorSignal): void
 *  
 * 
 * Binds a `VectorSignal` to a named Block input.
 */ 
setVectorInput(name: String, signal: VectorSignal): void;

}
