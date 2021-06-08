/// <reference path="../Audio.PlaybackController/index.d.ts" />
declare class AudioModule {
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
