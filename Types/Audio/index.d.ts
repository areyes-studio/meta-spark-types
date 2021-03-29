/// <reference path="../Audio.AudioComponent/index.d.ts" />
/// <reference path="../Audio.PlaybackController/index.d.ts" />
declare class AudioModule {
/**
*  
 * getAudioComponent(id: string): AudioComponent
 *  
 * 
 * Returns an `AudioComponent` corresponding to the DSP effect with the corresponding id.
 */
static getAudioComponent(id: string): AudioComponent;

/**
*  
 * getAudioPlaybackController(name: string): Promise<PlaybackController>
 *  
 * 
 * Get a playback controller from assets by name.
 */
static getAudioPlaybackController(name: string): Promise<PlaybackController>;

}
export = AudioModule;
