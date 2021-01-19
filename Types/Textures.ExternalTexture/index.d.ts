/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface ExternalTexture {
/**
* ```
(get) state: Signal<ExternalTexture.State>
(set) (Not Available)
```

Specifies a `Signal<ExternalTexture.State>` representing the loading state of the external texture.
The value of the signal is guaranteed to be a member of the `TexturesModule.ExternalTexture.State` enumeration.
*/
state: Signal<ExternalTexture.State>;
/**
* ```
(get) url: StringSignal
(set) url: StringSignal
```

Specifies the URL of the texture to be downloaded.
*/
url: StringSignal | string;
}
