/// <reference path="../Audio.AudioComponent/index.d.ts" />
/// <reference path="../Audio.PlaybackController/index.d.ts" />
declare namespace AudioModule {
/**
*  
 * getAudioComponent(id: string): AudioComponent
 *  
 * 
 * Returns an `AudioComponent` corresponding to the DSP effect with the corresponding id.
 */
function getAudioComponent(id: string): AudioComponent;

/**
*  
 * getAudioPlaybackController(name: string): Promise<PlaybackController>
 *  
 * 
 * Get a playback controller from assets by name.
 */
function getAudioPlaybackController(name: string): Promise<PlaybackController>;

/**
*  
 * getPlaybackController(name: string): PlaybackController
 *  
 * 
 * Get a playback controller from assets by name.
 */
function getPlaybackController(name: string): PlaybackController;

}
export = AudioModule;
