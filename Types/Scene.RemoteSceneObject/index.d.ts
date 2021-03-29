/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface RemoteSceneObject extends SceneObjectBase {
/**
* ```
(get) remoteModelIdentifier: StringSignal
(set) remoteModelIdentifier: StringSignal
```

Specifies the Remote 3D model indentifier.
*/
remoteModelIdentifier: StringSignal;
}
