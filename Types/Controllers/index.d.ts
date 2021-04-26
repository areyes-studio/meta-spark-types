/// <reference path="../Controllers.Button/index.d.ts" />
/// <reference path="../Controllers.ButtonEvent/index.d.ts" />
/// <reference path="../Controllers.ButtonEventType/index.d.ts" />
declare class ControllersModule {
/**
*  
 * getButton(name: string): Promise<Button>
 *  
 * 
 * Returns a promise that is fulfilled with a `Button` representing the button mapping with the
 * given name. This name, and the mapping from the name to the actual hardware inputs on a
 * controller, must be set up in Spark AR Studio's controller configuration. If no button
 * mapping exists with the given name, the returned promise will fail.
 */
static getButton(name: string): Promise<Button>;

/**
 * 
 * @property Pressed 
 * @property Released 
 */
static readonly ButtonEventType: {
  Pressed: "Pressed",
  Released: "Released",
}
}
export = ControllersModule;
