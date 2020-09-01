/// <reference path="../NativeUI.Picker/index.d.ts" />
/// <reference path="../NativeUI.Slider/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
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
 * enterRawTextEditMode(nodeName: string): Promise<boolean>
 *  
 * 
 * Requests a raw user input for given node. The key difference between raw user input and regular user input is that raw user input does not provide any editing UI.
 * Returns a promise that is resolved with `true` when keyboard was shown and now it's being hidden or `false` if failed to enter the raw text edit mode.
 */ 
function enterRawTextEditMode(nodeName: string): Promise<boolean>;

/** 
*  
 * exitRawTextEditMode(): Promise<boolean>
 *  
 * 
 * Exits raw text edit mode.
 */ 
function exitRawTextEditMode(): Promise<boolean>;

/** 
*  
 * getText(nodeName: string): StringSignal
 *  
 * 
 * Gets the user edited text of the given node.
 */ 
function getText(nodeName: string): StringSignal;

/** 
*  
 * setText(nodeName: string, text: string): void
 *  
 * 
 * Sets the text to the provided value for the node with a given name.
 */ 
function setText(nodeName: string, text: string): void;

/** 
*  
 * enterTextEditMode(nodeName: string): Promise<boolean>
 *  
 * 
 * Requests user input for given node.
 * Returns a promise that is resolved with boolean value representing whenever the request succeeded.
 */ 
function enterTextEditMode(nodeName: string): Promise<boolean>;

}
export = NativeUIModule;
