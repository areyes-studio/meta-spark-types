/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Animation.SignalRecord/index.d.ts" />
declare interface SignalRecorder {
/** 
* ```
(get) durationMs: ScalarSignal
(set) (Not Available)
```

Returns duration of SignalRecorder recording so far, in milliseconds.
**NOTE**: There may be up to a 2 frame delay in this value.
*/ 
durationMs: ScalarSignal | number;
/** 
* ```
(get) recordCount: ScalarSignal
(set) (Not Available)
```

Returns number of records taken in this SignalRecorder so far.
**NOTE**: There may be up to a 2 frame delay in this value.
*/ 
recordCount: ScalarSignal | number;
/** 
*  
 * stop(): SignalRecord
 *  
 * 
 * Stops this recorder and returns a Signal Record.
 */stop(): SignalRecord
 ;

} 
