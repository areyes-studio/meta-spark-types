/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Object/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare namespace RemoteMapsModule {
/** 
* ```
                                                (get) objectsCount: ScalarSignal
                                                (set) (Not Available)
                                                ```
*/ 
const objectsCount: ScalarSignal;
/** 
*  
 *                                                 setMapName(config: {name: string}): void
 *                                                  
 */function setMapName(config: {name: string}): void
 ;

/** 
*  
 *                                                 setEffectID(config: {effectID: string}): void
 *                                                  
 */function setEffectID(config: {effectID: string}): void
 ;

/** 
*  
 *                                                 enableScaleAlignment(config: {enable: ?number, numOfFrames: ?number}): void
 *                                                  
 */function enableScaleAlignment(config: {enable: ?number, numOfFrames: ?number}): void
 ;

/** 
*  
 *                                                 onARObjectAdded(): EventSource
 *                                                  
 */function onARObjectAdded(): EventSource
 ;

/** 
*  
 *                                                 objects(index: number): Object
 *                                                 objects(name: string): Object
 *                                                  
 */function objects(index: number): Object
 ;

function objects(name: string): Object
 ;

/** 
*  
 *                                                 uploadARObject(config: {name: string, transform: TransformSignal}): Promise<string>
 *                                                  
 */function uploadARObject(config: {name: string, transform: TransformSignal}): Promise<string>
 ;

/** 
*  
 *                                                 deleteARObject(config: {id: string}): Promise<string>
 *                                                  
 */function deleteARObject(config: {id: string}): Promise<string>
 ;

/** 
*  
 *                                                 updateARObject(config: {id: string, transform: TransformSignal}): Promise<string>
 *                                                  
 */function updateARObject(config: {id: string, transform: TransformSignal}): Promise<string>
 ;

} 
export = RemoteMapsModule;