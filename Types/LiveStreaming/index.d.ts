/// <reference path="../LiveStreaming.LiveStreamingComments/index.d.ts" />
/// <reference path="../LiveStreaming.LiveStreamingReactions/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace LiveStreamingModule {
/** 
* ```
(get) comments: LiveStreamingComments
(set) (Not Available)
```

Provides access to a `LiveStreamingComments` object that encapsulates data about the live stream's comments.
*/ 
const comments: LiveStreamingComments;
/** 
* ```
(get) concurrentViewerCount: ScalarSignal
(set) (Not Available)
```

 Provides access to a `ScalarSignal` that encapsulates the number of concurrent viewers of the live stream.
*/ 
const concurrentViewerCount: ScalarSignal | number;
/** 
* ```
(get) reactions: LiveStreamingReactions
(set) (Not Available)
```

Provides access to a `LiveStreamingReactions` object that encapsulates data about the live stream's reactions.
*/ 
const reactions: LiveStreamingReactions;
/** 
* ```
 (get) state: Signal<LiveStreamingModule.State>
 (set) (Not Available)
 ```

 Specifies a `LiveStreaming.State` enum value indicating the broadcast state.
*/ 
const state: Signal<LiveStreamingModule.State>;
}
export = LiveStreamingModule;
