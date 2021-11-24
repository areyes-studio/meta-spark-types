/// <reference path="../FormFactor.FormFactorCategoryType/index.d.ts" />
declare class FormFactorModule {
/**
*  
 * get(categoryType: FormFactorCategoryType): FormFactorCategoryBase
 *  
 * 
 * Get a form factor by category id
 */
static get(categoryType: FormFactorCategoryType): FormFactorCategoryBase;

/**
*  
 * getAll(): FormFactorCategoryMap
 *  
 * 
 * Get all the used form factors
 */
static getAll(): FormFactorCategoryMap;

/**
 * The Direction enum describes the stack layout's direction.
 * @property LOCALE Form Factor for the locale of the device
 * @property PLATFORM Form Factor for the platform that runs the effect.
 */
static readonly FormFactorCategoryType: {
  LOCALE: "LOCALE",
  PLATFORM: "PLATFORM",
}
}
export = FormFactorModule;
