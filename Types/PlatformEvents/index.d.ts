/// <reference path="../Reactive.EventSource/index.d.ts" />
declare class PlatformEventsModule {
/**
* ```
(get) allEvents: EventSource<any>
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/
static readonly allEvents: EventSource<any>;
/**
*  
 * send(event: Object): void
 *  
 * 
 * Send a given event in a form of any Object to the platform-specific implementation.
 */
static send(event: Object): void;

}
export = PlatformEventsModule;
