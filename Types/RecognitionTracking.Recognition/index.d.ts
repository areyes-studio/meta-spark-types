/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../RecognitionTracking.Tracking/index.d.ts" />
declare interface Recognition {
/**
* ```
(get) hasTracking: boolean
(set) (Not Available)
```
*/
hasTracking: boolean;
/**
* ```
(get) metadata: string
(set) (Not Available)
```
*/
metadata: string;
/**
* ```
(get) onLost: EventSource
(set) (Not Available)
```
*/
onLost: EventSource;
/**
* ```
(get) tracking: Tracking
(set) (Not Available)
```
*/
tracking: Tracking;
}
