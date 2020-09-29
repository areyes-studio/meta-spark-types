/// <reference path="../Augmentations.Augmentation/index.d.ts" />
declare namespace AugmentationsModule {
/**
*  
 * getConfig(): Promise<any>
 *  
 * 
 */
function getConfig(): Promise<any>;

/**
*  
 * instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>
 *  
 * 
 */
function instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>;

/**
*  
 * remove(token: string): Promise<string>
 *  
 * 
 */
function remove(token: string): Promise<string>;

/**
*  
 * requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>
 *  
 * 
 */
function requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>;

}
export = AugmentationsModule;
