/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Assets.ShaderCode/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />
declare interface ComposedMaterial extends MaterialBase {
/**
*  
 * setParameter(parameterName: string, signal: ISignal | Transform | WorldTransform): void
 *  
 * 
 * Assigns a signal to the specified patch asset parameter.
 */
setParameter(parameterName: string, signal: ISignal | Transform | WorldTransform): void;

/**
*  
 * setShaderCode(shaderCodeAsset: ShaderCode, interfaceName?: string): void
 *  
 * 
 * Sets the given shaderCodeAsset for the composed material with
 * the interface name defaulting to 'main'.
 */
setShaderCode(shaderCodeAsset: ShaderCode, interfaceName?: string): void;

}
