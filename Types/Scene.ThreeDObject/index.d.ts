/// <reference path="../Animation.AnimationPlaybackController/index.d.ts" />
declare interface ThreeDObject {
/**
*  
 * getAnimationPlaybackController(): Promise<AnimationPlaybackController | null>
 *  
 * 
 * Get assigned playback controller for this object, if any
 */
getAnimationPlaybackController(): Promise<AnimationPlaybackController | null>;

/**
*  
 * setAnimationPlaybackController(controller: AnimationPlaybackController | null): Promise<void>
 *  
 * 
 * Set playback controller to this object
 */
setAnimationPlaybackController(controller: AnimationPlaybackController | null): Promise<void>;

}
