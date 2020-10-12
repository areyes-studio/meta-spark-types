/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../PortalWorldModel.Person/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace PortalWorldModelModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of people tracked by the model.
*/
const count: ScalarSignal | number;
/**
* ```
(get) crop: BoundingBoxSignal
(set) (Not Available)
```

The scene crop (relative to full FOV) currently applied.
*/
const crop: BoundingBoxSignal;
/**
*  
 * person(index: number): Person
 *  
 * 
 * Gets the `Person` corresponding to the given index.
 */
function person(index: number): Person;

}
export = PortalWorldModelModule;
