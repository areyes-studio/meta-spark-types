/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Diagnostics.TypeSystemMetadata/index.d.ts" />
declare namespace DiagnosticsModule {
/**
* ```
(get) typeSystem: TypeSystemMetadata
(set) (Not Available)
```

Object containing available module and types information.
*/
const typeSystem: TypeSystemMetadata;
/**
*  
 * log(content: Object): void
 *  
 * 
 * Flattens content to a string and prints it to the debug console.
 * Note: this function can be reassigned to any var (i.e. `foo.log = Diagnostics.log;`)
 */
function log(content: Object): void;

/**
*  
 * watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal): void
 *  
 * 
 * Adds the specified signal to the watch view in AR Studio with the specified tag.
 */
function watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal | boolean | number | string): void;

}
export = DiagnosticsModule;
