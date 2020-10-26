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
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Returns an object encapsulating all input setters for the Block Instance.
*/
inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Block Instance.
*/
outputs: BlockInstanceOutputs;
/**
*  
 * getBooleanOutput(name: string): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` for a named Block output.
 */
getBooleanOutput(name: string): BoolSignal;

/**
*  
 * getColorOutput(name: string): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` for a named Block output.
 */
getColorOutput(name: string): ColorSignal;

/**
*  
 * getPixelPointOutput(name: string): Point2DSignal
 *  
 * 
 * Returns a `Point2DSignal` for a named Block output.
 */
getPixelPointOutput(name: string): Point2DSignal;

/**
*  
 * getPointOutput(name: string): PointSignal
 *  
 * 
 * Returns a `PointSignal` for a named Block output.
 */
getPointOutput(name: string): PointSignal;

/**
*  
 * getScalarOutput(name: string): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` for a named Block output.
 */
getScalarOutput(name: string): ScalarSignal;

/**
*  
 * getShaderOutput(name: string): ShaderSignal
 *  
 * 
 * Returns a `ShaderSignal` for a named Block output.
 */
getShaderOutput(name: string): ShaderSignal;

/**
*  
 * getStringOutput(name: string): StringSignal
 *  
 * 
 * Returns a `StringSignal` for a named Block output.
 */
getStringOutput(name: string): StringSignal;

/**
*  
 * getVectorOutput(name: string): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` for a named Block output.
 */
getVectorOutput(name: string): VectorSignal;

/**
*  
 * setBooleanInput(name: string, signal: BoolSignal): void
 *  
 * 
 * Binds a `BoolSignal` to a named Block input.
 */
setBooleanInput(name: string, signal: BoolSignal | boolean): void;

/**
*  
 * setColorInput(name: string, signal: ColorSignal): void
 *  
 * 
 * Binds a `ColorSignal` to a named Block input.
 */
setColorInput(name: string, signal: ColorSignal): void;

/**
*  
 * setPixelPointInput(name: string, signal: Point2DSignal): void
 *  
 * 
 * Binds a `Point2DSignal` to a named Block input.
 */
setPixelPointInput(name: string, signal: Point2DSignal): void;

/**
*  
 * setPointInput(name: string, signal: PointSignal): void
 *  
 * 
 * Binds a `PointSignal` to a named Block input.
 */
setPointInput(name: string, signal: PointSignal): void;

/**
*  
 * setScalarInput(name: string, signal: ScalarSignal): void
 *  
 * 
 * Binds a `ScalarSignal` to a named Block input.
 */
setScalarInput(name: string, signal: ScalarSignal | number): void;

/**
*  
 * setShaderInput(name: string, signal: ShaderSignal): void
 *  
 * 
 * Binds a `ShaderSignal` to a named Block input.
 */
setShaderInput(name: string, signal: ShaderSignal): void;

/**
*  
 * setStringInput(name: string, signal: StringSignal): void
 *  
 * 
 * Binds a `StringSignal` to a named Block input.
 */
setStringInput(name: string, signal: StringSignal | string): void;

/**
*  
 * setVectorInput(name: string, signal: VectorSignal): void
 *  
 * 
 * Binds a `VectorSignal` to a named Block input.
 */
setVectorInput(name: string, signal: VectorSignal): void;

}
