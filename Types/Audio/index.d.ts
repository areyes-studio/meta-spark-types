/// <reference path="../String/index.d.ts" />
/// <reference path="../Audio.PlaybackController/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Audio.AudioComponent/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare namespace AudioModule {
/** 
*  
 * getPlaybackController(name: String): PlaybackController
 *  
 * Get a playback controller from assets by name.
 */function getPlaybackController(name: String): PlaybackController
 ;

/** 
*  
 * getAudioComponent(id: string): AudioComponent
 *  
 * 
 * Returns an `AudioComponent` corresponding to the DSP effect with the corresponding id.
 */function getAudioComponent(id: string): AudioComponent
 ;

/** 
*  
 * muteMicrophone(): void
 *  
 * 
 * Sets the microphone volume level to zero.
 */function muteMicrophone(): void
 ;

/** 
*  
 * unmuteMicrophone(): void
 *  
 * 
 * Unmutes the microphone, setting the volume level to its last non-zero value.
 */function unmuteMicrophone(): void
 ;

} 
export = AudioModule;