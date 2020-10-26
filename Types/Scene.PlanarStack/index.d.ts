/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface PlanarStack {
/**
* ```
(get) childAlign: Signal<SceneModule.StackAlign>
(set) childAlign: Signal<SceneModule.StackAlign>
```

Specifies the alignment of the stack children
*/
childAlign: Signal<SceneModule.StackAlign>;
/**
* ```
(get) childDistribute: Signal<SceneModule.StackDistribute>
(set) childDistribute: Signal<SceneModule.StackDistribute>
```

Specifies the distribution of the stack children
*/
childDistribute: Signal<SceneModule.StackDistribute>;
/**
* ```
(get) direction: Signal<SceneModule.StackDirection>
(set) direction: Signal<SceneModule.StackDirection>
```

Specifies the direction of the stack layout.
*/
direction: Signal<SceneModule.StackDirection>;
/**
* ```
(get) gap: ScalarSignal
(set) gap: ScalarSignal
```

Specifies the gap between the stack children
*/
gap: ScalarSignal | number;
/**
*  
 * getMaterial(): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 */
getMaterial(): Promise<MaterialBase | null>;

/**
*  
 * setMaterial(m: MaterialBase): Promise<null>
 *  
 * 
 * Returns a promise that is resolved when given material is associated with a given scene object.
 */
setMaterial(m: MaterialBase): Promise<null>;

}
