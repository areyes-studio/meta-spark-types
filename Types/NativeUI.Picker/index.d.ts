/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Picker {
/**
* ```
(get) selectedIndex: ScalarSignal
(set) selectedIndex: ScalarSignal
```

Represents the index of the selected item in the picker.
*/
selectedIndex: ScalarSignal | number;
/**
* ```
(get) (Not Available)
(set) visible: BoolSignal
```

Will instruct picker to be visible or not visible, according to passed boolean value.
*/
visible: BoolSignal | boolean;
/**
*  
 * configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string}>, selectedIndex?: number}): Promise<void>
 *  
 * 
 * Configures the picker with a given JSON configuration.
 * The configuration consists of an optional initial selected index (0 will be used if not specified) and a list of items.
 * For items you must specify a name of an uncompressed texture which will be used as the picker item image.
 */
configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string}>, selectedIndex?: number}): Promise<void>;

}
