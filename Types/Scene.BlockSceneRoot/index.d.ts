/// <reference path="../String/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface BlockSceneRoot {
/** 
*  
 * setPointInput(name: String, signal: PointSignal): void
 *  
 * 
 * Binds a `PointSignal` to a named Block input.
 */setPointInput(name: String, signal: PointSignal): void
 ;

/** 
*  
 * setStringInput(name: String, signal: StringSignal): void
 *  
 * 
 * Binds a `StringSignal` to a named Block input.
 */setStringInput(name: String, signal: StringSignal): void
 ;

/** 
*  
 * setScalarInput(name: String, signal: ScalarSignal): void
 *  
 * 
 * Binds a `ScalarSignal` to a named Block input.
 */setScalarInput(name: String, signal: ScalarSignal): void
 ;

/** 
*  
 * getScalarOutput(name: String): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` for a named Block output.
 */getScalarOutput(name: String): ScalarSignal
 ;

/** 
*  
 * setPixelPointInput(name: String, signal: PixelPointSignal): void
 *  
 * 
 * Binds a `PixelPointSignal` to a named Block input.
 */setPixelPointInput(name: String, signal: PixelPointSignal): void
 ;

/** 
*  
 * setShaderInput(name: String, signal: ShaderSignal): void
 *  
 * 
 * Binds a `ShaderSignal` to a named Block input.
 */setShaderInput(name: String, signal: ShaderSignal): void
 ;

/** 
*  
 * getBooleanOutput(name: String): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` for a named Block output.
 */getBooleanOutput(name: String): BoolSignal
 ;

/** 
*  
 * setColorInput(name: String, signal: ColorSignal): void
 *  
 * 
 * Binds a `ColorSignal` to a named Block input.
 */setColorInput(name: String, signal: ColorSignal): void
 ;

/** 
*  
 * setVectorInput(name: String, signal: VectorSignal): void
 *  
 * 
 * Binds a `VectorSignal` to a named Block input.
 */setVectorInput(name: String, signal: VectorSignal): void
 ;

/** 
*  
 * getStringOutput(name: String): StringSignal
 *  
 * 
 * Returns a `StringSignal` for a named Block output.
 */getStringOutput(name: String): StringSignal
 ;

/** 
*  
 * setBooleanInput(name: String, signal: BoolSignal): void
 *  
 * 
 * Binds a `BoolSignal` to a named Block input.
 */setBooleanInput(name: String, signal: BoolSignal): void
 ;

/** 
*  
 * getPointOutput(name: String): PointSignal
 *  
 * 
 * Returns a `PointSignal` for a named Block output.
 */getPointOutput(name: String): PointSignal
 ;

/** 
*  
 * getPixelPointOutput(name: String): PixelPointSignal
 *  
 * 
 * Returns a `PixelPointSignal` for a named Block output.
 */getPixelPointOutput(name: String): PixelPointSignal
 ;

/** 
*  
 * getColorOutput(name: String): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` for a named Block output.
 */getColorOutput(name: String): ColorSignal
 ;

/** 
*  
 * getVectorOutput(name: String): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` for a named Block output.
 */getVectorOutput(name: String): VectorSignal
 ;

/** 
*  
 * getShaderOutput(name: String): ShaderSignal
 *  
 * 
 * Returns a `ShaderSignal` for a named Block output.
 */getShaderOutput(name: String): ShaderSignal
 ;

} 
