/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class AnalyticsModule {
/**
* ```
(get) productName: StringSignal
(set) (Not Available)
```

Specifies the current context camera product name used for analytics.
Note: This can return empty string signal in cases where current product name couldn't be determined.
*/
static readonly productName: StringSignal;
/**
*  
 * logEvent(eventName: string, extras: any): void
 *  
 * 
 * Log an analytics event with a custom name and optional extras object.
 */
static logEvent(eventName: string, extras: any): void;

}
export = AnalyticsModule;
