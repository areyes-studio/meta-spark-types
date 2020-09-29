/// <reference path="../Reactive.EventSource/index.d.ts" />
declare namespace InstantGamingModule {
/**
* ```
(get) events: EventSource<any>
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/
const events: EventSource<any>;
/**
*  
 * showGame(): void
 *  
 * 
 * Shows game and returns void.
 */
function showGame(): void;

}
export = InstantGamingModule;
