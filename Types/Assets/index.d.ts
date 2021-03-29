/// <reference path="../Assets.Asset/index.d.ts" />
/// <reference path="../Assets.AssetType/index.d.ts" />
declare class AssetsModule {
/**
*  
 * findFirst(name: string): Promise<Asset | null>
 *  
 * 
 * Find first text asset that matches a given name pattern.
 */
static findFirst(name: string): Promise<Asset | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>
 *  
 * 
 * Find text assets with names that match a given pattern.
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>;

/**
*  
 * getAll(): Promise<Array<Asset>>
 *  
 * 
 * Get all text assets that are bundled in this effect.
 */
static getAll(): Promise<Array<Asset>>;

/**
 * 
 * @property Text 
 */
static readonly AssetType: {
  Text: "Text",
}
}
export = AssetsModule;
