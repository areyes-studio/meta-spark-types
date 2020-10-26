/// <reference path="../Assets.Asset/index.d.ts" />
declare namespace AssetsModule {
/**
*  
 * findFirst(name: string): Promise<Asset | null>
 *  
 * 
 * Find first text asset that matches a given name pattern.
 */
function findFirst(name: string): Promise<Asset | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>
 *  
 * 
 * Find text assets with names that match a given pattern.
 */
function findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>;

/**
*  
 * getAll(): Promise<Array<Asset>>
 *  
 * 
 * Get all text assets that are bundled in this effect.
 */
function getAll(): Promise<Array<Asset>>;

}
export = AssetsModule;
