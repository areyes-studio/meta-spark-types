/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class ViperDebugModule {
/**
* ```
(get) debugString: StringSignal
(set) (Not Available)
```

Gets a debug string piped through from Viper.
*/
static readonly debugString: StringSignal;
/**
*  
 * clearViperOnlyMode(): void
 *  
 * 
 * Removes running in viper only mode. (Aka, runs the normal gyro+regiontracking+SLAM).
 */
static clearViperOnlyMode(): void;

/**
*  
 * setViperOnlyMode(): void
 *  
 * 
 * Makes underlying camera + anchor tracking algorithms run in viper only mode.
 */
static setViperOnlyMode(): void;

}
export = ViperDebugModule;
