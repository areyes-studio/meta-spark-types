/// <reference path="../Augmentations.Augmentation/index.d.ts" />
/// <reference path="../Augmentations.AugmentationInstance/index.d.ts" />
/// <reference path="../Augmentations.AugmentationInstanceState/index.d.ts" />
/// <reference path="../Augmentations.AugmentationState/index.d.ts" />
declare class AugmentationsModule {
/**
*  
 * getConfig(): Promise<any>
 *  
 * 
 */
static getConfig(): Promise<any>;

/**
*  
 * instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>
 *  
 * 
 */
static instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>;

/**
*  
 * remove(token: string): Promise<string>
 *  
 * 
 */
static remove(token: string): Promise<string>;

/**
*  
 * requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>
 *  
 * 
 */
static requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>;

/**
 * `AugmentationInstanceState` describes the state of an `AugmentationInstance`
 * @property INSTANTIATED `AugmentationInstance` has been instantiated
 * @property REMOVED `AugmentationInstance` has been removed
 * @property REMOVING `AugmentationInstance` is being removed
 */
static readonly AugmentationInstanceState: {
  INSTANTIATED: "INSTANTIATED",
  REMOVED: "REMOVED",
  REMOVING: "REMOVING",
}
/**
 * `AugmentationState` describes the state of an `Augmentation`
 * @property DOWNLOADED `Augmentation` is downloaded and available for instantiation
 * @property DOWNLOADING `Augmentation` is in the process of being downloaded
 * @property FAILED `Augmentation` download failed
 */
static readonly AugmentationState: {
  DOWNLOADED: "DOWNLOADED",
  DOWNLOADING: "DOWNLOADING",
  FAILED: "FAILED",
}
}
export = AugmentationsModule;
