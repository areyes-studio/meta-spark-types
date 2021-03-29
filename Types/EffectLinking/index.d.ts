/// <reference path="../EffectLinking.RequestedEffect/index.d.ts" />
declare class EffectLinkingModule {
/**
*  
 * requestEffect(requestEffectParams: {[key: string]: string}): RequestedEffect
 *  
 * 
 * Requests the hosting environment to download an effect via it's ID.
 * `effectId` parameter defines the ID of the effect being requested.
 * Returned `RequestedEffect` can be used to apply the effect, and subscribe to apply failure.
 */
static requestEffect(requestEffectParams: {[key: string]: string}): RequestedEffect;

}
export = EffectLinkingModule;
