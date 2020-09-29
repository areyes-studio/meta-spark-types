/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
declare namespace PortalWorldModelModule {
/**
* ```
(get) count: number
(set) (Not Available)
```
The number of people tracked by the model.
*/
const count: number;
/**
* ```
(get) crop: BoundingBoxSignal
(set) (Not Available)
```
The scene crop (relative to full FOV) currently applied.
*/
const crop: BoundingBoxSignal;
}
export = PortalWorldModelModule;
