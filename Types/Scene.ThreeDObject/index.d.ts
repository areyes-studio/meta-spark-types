/// <reference path="../Reactive.AnimationBlend/index.d.ts" />
/// <reference path="../Animation.AnimationPlaybackController/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare interface ThreeDObject extends SceneObjectBase {
/**
*  
 * clearAnimationBlend(): void
 *  
 * 
 * Clear the AnimationBlend on this ThreeDObject
 */
clearAnimationBlend(): void;

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
 * setAnimationBlend(blend: AnimationBlend): void
 *  
 * 
 * Applies the AnimationBlend to this ThreeDObject
 * * 'blend' - blended animation.
 */
setAnimationBlend(blend: AnimationBlend): void;

/**
*  
 * setAnimationPlaybackController(controller: AnimationPlaybackController | null): Promise<void>
 *  
 * 
 * Set playback controller to this object
 */
setAnimationPlaybackController(controller: AnimationPlaybackController | null): Promise<void>;

}
