/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface TranscriptionSessionData {
/**
* ```
(get) currentPartialPhrase: StringSignal
(set) (Not Available)
```

Returns the current partial transcription phrase. It updates real time as the user speak.
*/
currentPartialPhrase: StringSignal | string;
/**
* ```
(get) lastFullPhrase: StringSignal
(set) (Not Available)
```

Returns the full transcription phrase. It updates only when the user pause speaking.
*/
lastFullPhrase: StringSignal | string;
}
