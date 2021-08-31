/// <reference path="../Reactive.EventSource/index.d.ts" />
declare interface MessageChannel {
/**
* ```
(get) onMessage: EventSource<Object>
(set) (Not Available)
```

Stream of all messages on this channel
*/
onMessage: EventSource<Object>;
/**
*  
 * sendMessage(message: Object, realTimeChannel: boolean): Promise<void>
 *  
 * 
 * Sends free-form message to channel.
 * Note, might fail due to rate-limiting or payload size violation
 */
sendMessage(message: Object, realTimeChannel: boolean): Promise<void>;

}
