/// <reference path="../NativeUI.Picker/index.d.ts" />
/// <reference path="../NativeUI.Slider/index.d.ts" />
/// <reference path="../String/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare namespace NativeUIModule {
/** 
* ```
                                  (get) picker: Picker
                                  (set) picker: Picker
                                  ```
                                  Represents the picker object.
*/ 
const picker: Picker;
/** 
* ```
                                  (get) slider: Slider
                                  (set) slider: Slider
                                  ```
                                  Represents the slider object.
*/ 
const slider: Slider;
/** 
*  
 *                                   setText(nodeName: String, text: String): void
 *                                    
 *                                   Sets the text to the provided value for the node with a given name.
 */function setText(nodeName: String, text: String): void
 ;

/** 
*  
 *                                     enterTextEditMode(nodeName: String): void
 *                                      
 *                                     Requests user input for given node.
 */function enterTextEditMode(nodeName: String): void
 ;

/** 
*  
 *                                   getText(nodeName: String): StringSignal
 *                                    
 *                                   Gets the user edited text of the given node.
 */function getText(nodeName: String): StringSignal
 ;

/** 
*  
 *                                   enterRawTextEditMode(nodeName: String): Promise<boolean>
 *                                    
 *                                   Requests a raw user input for given node. The key difference between raw user input and regular user input is that raw user input does not provide any editing UI.
 *                                   Returns a promise that is resolved with `true` when keyboard was shown and now it's being hidden or `false` if failed to enter the raw text edit mode.
 */function enterRawTextEditMode(nodeName: String): Promise<boolean>
 ;

/** 
*  
 *                                   exitRawTextEditMode(): void
 *                                    
 *                                   Exits raw text edit mode.
 */function exitRawTextEditMode(): void
 ;

} 
export = NativeUIModule;