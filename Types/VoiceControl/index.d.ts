/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../VoiceControl.TranscriptionSession/index.d.ts" />
declare namespace VoiceControlModule {
/**
* ```
(get) deviceWakeWord: StringSignal
(set) (Not Available)
```

Returns the wake word required to activate voice control on this device
*/
const deviceWakeWord: StringSignal | string;
/**
* ```
(get) transcriptionState: StringSignal
(set) (Not Available)
```

Returns the state presents if wake word less is available and if it is active
*/
const transcriptionState: StringSignal | string;
/**
*  
 * monitorCommand(command: string): EventSource<void>
 *  
 * 
 * Returns an `EventSource` object that fires when Assistant can match a voice to the command string.
 */
function monitorCommand(command: string): EventSource<void>;

/**
*  
 * monitorIntent(intentSpec: IntentSpec): EventSource<Object>
 *  
 * 
 * Returns an `EventSource` object that fires when Assistant infers that a given intent has been invoked.
 */
function monitorIntent(intentSpec: IntentSpec): EventSource<Object>;

/**
*  
 * startTranscription(): Promise<TranscriptionSession>
 *  
 * 
 * Start transcription mode
 */
function startTranscription(): Promise<TranscriptionSession>;

}
export = VoiceControlModule;
