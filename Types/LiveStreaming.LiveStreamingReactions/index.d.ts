/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface LiveStreamingReactions {
/** 
* ```
(get) like: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the like reaction for this live stream.
*/ 
like: ScalarSignal | number;
/** 
* ```
(get) sad: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the sad reaction for this live stream.
*/ 
sad: ScalarSignal | number;
/** 
* ```
(get) love: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the love reaction for this live stream.
*/ 
love: ScalarSignal | number;
/** 
* ```
(get) haha: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the haha reaction for this live stream.
*/ 
haha: ScalarSignal | number;
/** 
* ```
(get) wow: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the wow reaction for this live stream.
*/ 
wow: ScalarSignal | number;
/** 
* ```
(get) angry: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the count of the angry reaction for this live stream.
*/ 
angry: ScalarSignal | number;
/** 
* ```
(get) total: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` that is the total number of reactions on this live stream. This may exceed the sum of the individual reaction counts (like, love, etc.) if a seasonal reaction (such as thankful) is available and is used by viewers.
*/ 
total: ScalarSignal | number;
}
