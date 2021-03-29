/// <reference path="../NativeUI.Picker/index.d.ts" />
/// <reference path="../NativeUI.Slider/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class NativeUIModule {
/**
* ```
(get) picker: Picker
(set) picker: Picker
```

Represents the picker object.
*/
static readonly picker: Picker;
/**
* ```
(get) slider: Slider
(set) slider: Slider
```

Represents the slider object.
*/
static readonly slider: Slider;
/**
*  
 * enterRawTextEditMode(nodeName: string): Promise<boolean>
 *  
 * 
 * Requests a raw user input for given node. The key difference between raw user input and regular user input is that raw user input does not provide any editing UI.
 * Returns a promise that is resolved with `true` when keyboard was shown and now it's being hidden or `false` if failed to enter the raw text edit mode.
 */
static enterRawTextEditMode(nodeName: string): Promise<boolean>;

/**
*  
 * enterTextEditMode(nodeName: string): Promise<boolean>
 *  
 * 
 * Requests user input for given node.
 * Returns a promise that is resolved with boolean value representing whenever the request succeeded.
 */
static enterTextEditMode(nodeName: string): Promise<boolean>;

/**
*  
 * exitRawTextEditMode(): Promise<boolean>
 *  
 * 
 * Exits raw text edit mode.
 */
static exitRawTextEditMode(): Promise<boolean>;

/**
*  
 * getText(nodeName: string): StringSignal
 *  
 * 
 * Gets the user edited text of the given node.
 */
static getText(nodeName: string): StringSignal;

/**
*  
 * setText(nodeName: string, text: string): void
 *  
 * 
 * Sets the text to the provided value for the node with a given name.
 */
static setText(nodeName: string, text: string): void;

}
export = NativeUIModule;
