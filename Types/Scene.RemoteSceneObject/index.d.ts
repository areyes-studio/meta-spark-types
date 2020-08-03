/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface RemoteSceneObject {
/** 
* ```
(get) remoteModelIdentifier: StringSignal
(set) remoteModelIdentifier: StringSignal
```

Specifies the Remote 3D model indentifier.
*/ 
remoteModelIdentifier: StringSignal | string;
} 
