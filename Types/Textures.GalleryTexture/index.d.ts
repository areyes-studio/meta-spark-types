/// <reference path="../Prefabs.State/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
declare interface GalleryTexture extends TextureBase {
/**
* ```
(get) state: StringSignal<State>
(set) (Not Available)
```

Specifies a `Signal` representing the state of the gallery texture. The value of the signal is guaranteed to be a member of the `TexturesModule.GalleryTexture.State` enumeration.
*/
state: StringSignal<State>;
}
