/// <reference path="../PortalWorldModel.Arm/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../PortalWorldModel.Head/index.d.ts" />
/// <reference path="../PortalWorldModel.Leg/index.d.ts" />
/// <reference path="../PortalWorldModel.Person/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../PortalWorldModel.Torso/index.d.ts" />
declare class PortalWorldModelModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of people tracked by the model.
*/
static readonly count: ScalarSignal;
/**
* ```
(get) crop: BoundingBoxSignal
(set) (Not Available)
```

The scene crop (relative to full FOV) currently applied.
*/
static readonly crop: BoundingBoxSignal;
/**
*  
 * person(index: number): Person
 *  
 * 
 * Gets the `Person` corresponding to the given index.
 */
static person(index: number): Person;

}
export = PortalWorldModelModule;
