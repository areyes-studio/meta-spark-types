/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../VoiceControl.TranscriptionSession/index.d.ts" />
/// <reference path="../VoiceControl.TranscriptionSessionData/index.d.ts" />
declare class VoiceControlModule {
/**
* ```
(get) deviceWakeWord: StringSignal
(set) (Not Available)
```

Returns the wake word required to activate voice control on this device
*/
static readonly deviceWakeWord: StringSignal;
/**
* ```
(get) transcriptionState: StringSignal
(set) (Not Available)
```

Returns the state presents if wake word less is available and if it is active
*/
static readonly transcriptionState: StringSignal;
/**
*  
 * monitorCommand(command: string): EventSource<void>
 *  
 * 
 * Returns an `EventSource` object that fires when Assistant can match a voice to the command string.
 */
static monitorCommand(command: string): EventSource<void>;

/**
*  
 * monitorIntent(intentSpec: IntentSpec, slotSpecFilter: EntitySlotSpec): EventSource<Object>
 *  
 * 
 * Returns an `EventSource` object that fires when Assistant infers that a given intent has been invoked.
 */
static monitorIntent(intentSpec: IntentSpec, slotSpecFilter: EntitySlotSpec): EventSource<Object>;

/**
*  
 * registerEntity(name: string, tag: string, synonyms: Array<string>): Promise<DynamicEntity>
 *  
 * 
 * Adds a new entity that is a possible value for slots in this effect
 */
static registerEntity(name: string, tag: string, synonyms: Array<string>): Promise<DynamicEntity>;

/**
*  
 * startTranscription(): Promise<TranscriptionSession>
 *  
 * 
 * Start transcription mode
 */
static startTranscription(): Promise<TranscriptionSession>;

}
export = VoiceControlModule;
