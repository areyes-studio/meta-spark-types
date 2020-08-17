/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface ExternalStreamTexture {
/** 
* ```
(get) streamId: StringSignal
(set) streamId: StringSignal
```

Specifies a `StringSignal` representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
*/ 
streamId: StringSignal | string;
/** 
* ```
(get) streamIdentifier: string
(set) streamIdentifier: string
```

Specifies a string representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
*/ 
streamIdentifier: string;
} 
