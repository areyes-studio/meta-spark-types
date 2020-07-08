/// <reference path="../string/index.d.ts" />
/// <reference path="../any/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare namespace AugmentationsModule {
/** 
*  
 * instantiate(effectPath: string, config: any): Promise<string>
 *  
 */function instantiate(effectPath: string, config: any): Promise<string>
 ;

/** 
*  
 * remove(token: string): Promise<string>
 *  
 */function remove(token: string): Promise<string>
 ;

/** 
*  
 * getConfig(): Promise<any>
 *  
 */function getConfig(): Promise<any>
 ;

/** 
*  
 * requestAugmentation(params: any): Promise<Augmentation>
 *  
 */function requestAugmentation(params: any): Promise<Augmentation>
 ;

} 
export = AugmentationsModule;