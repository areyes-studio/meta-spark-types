/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../EffectLinking.RequestedEffect/index.d.ts" />
declare namespace EffectLinkingModule {
/** 
* ```
(get) onGoToEffectFailure: EventSource
(set) (Not Available)
```
*/ 
const onGoToEffectFailure: EventSource;
/** 
*  
 * goToEffect(effectID: string): void
 *  
 */function goToEffect(effectID: string): void
 ;

/** 
*  
 * requestEffect(requestEffectParams: {effectID: string}): RequestedEffect
 *  
 * 
 * Requests the hosting environment to download an effect via it's ID.
 * effectID defines the ID of the effect being requested.
 * Returned RequestedEffect can be used to apply the effect, and subscribe to apply failure.
 */function requestEffect(requestEffectParams: {effectID: string}): RequestedEffect
 ;

} 
export = EffectLinkingModule;