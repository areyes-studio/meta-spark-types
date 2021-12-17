/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
declare interface SceneDepthTexture extends TextureBase {
/**
* ```
(get) trackingQuality: StringSignal<TrackingQuality>
(set) (Not Available)
```
*/
trackingQuality: StringSignal<TrackingQuality>;
}
