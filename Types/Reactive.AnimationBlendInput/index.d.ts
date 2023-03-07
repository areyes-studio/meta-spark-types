/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface AnimationBlendInput {
/**
* ```
(get) clip: number
(set) clip: number
```
*/
clip: number;
/**
* ```
(get) progress: ScalarSignal
(set) progress: ScalarSignal
```
*/
progress: ScalarSignal;
/**
* ```
(get) weight: ScalarSignal
(set) weight: ScalarSignal
```
*/
weight: ScalarSignal;
}
