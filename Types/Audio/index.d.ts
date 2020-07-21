/// <reference path="../String/index.d.ts" />
/// <reference path="../Audio.PlaybackController/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../Audio.AudioComponent/index.d.ts" />
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
 * getAudioPlaybackController(name: String): Promise<PlaybackController>
 *  
 * Get a playback controller from assets by name.
 */function getAudioPlaybackController(name: String): Promise<PlaybackController>
 ;

/** 
*  
 * getAudioComponent(id: string): AudioComponent
 *  
 * 
 * Returns an `AudioComponent` corresponding to the DSP effect with the corresponding id.
 */function getAudioComponent(id: string): AudioComponent
 ;

} 
export = AudioModule;