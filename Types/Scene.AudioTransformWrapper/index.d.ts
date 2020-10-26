/// <reference path="../Scene.AudioTransformParameterWrapper/index.d.ts" />
declare interface AudioTransformWrapper {
/**
* ```
(get) effectName: string
(set) (Not Available)
```
*/
effectName: string;
/**
*  
 * transformParameterAtIndex(index: number): AudioTransformParameterWrapper
 *  
 * 
 */
transformParameterAtIndex(index: number): AudioTransformParameterWrapper;

/**
*  
 * transformParameterByName(name: string): AudioTransformParameterWrapper
 *  
 * 
 */
transformParameterByName(name: string): AudioTransformParameterWrapper;

/**
*  
 * transformParametersCount(): number
 *  
 * 
 */
transformParametersCount(): number;

}
