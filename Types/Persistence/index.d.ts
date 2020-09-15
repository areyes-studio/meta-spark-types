/// <reference path="../Persistence.StorageScope/index.d.ts" />
declare namespace PersistenceModule {
/** 
* ```
(get) captureScope: Object
```

Gets an object corresponding to the capture scope.
*/ 
const captureScope: Object;
/** 
* ```
(get) sharedScope: Object
```

Gets an object corresponding to the shared scope.
*/ 
const sharedScope: Object;
/** 
* ```
(get) userScope: StorageScope
```

Gets an instance of StorageScope corresponding to the user scope.
*/ 
const userScope: StorageScope;
}
export = PersistenceModule;
