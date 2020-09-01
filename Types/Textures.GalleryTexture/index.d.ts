/// <reference path="../Textures.GalleryTexture.State/index.d.ts" />
declare interface GalleryTexture {
/** 
* ```
(get) state: Signal<State>
(set) (Not Available)
```

Specifies a `Signal` representing the state of the gallery texture. The value of the signal is guaranteed to be a member of the `TexturesModule.GalleryTexture.State` enumeration.
*/ 
state: Signal<State>;
}
