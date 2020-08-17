/// <reference path="../Reactive.EventSource/index.d.ts" />
declare namespace VoiceControlModule {
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

} 
export = VoiceControlModule;