/// <reference path="../Persistence.StorageScope/index.d.ts" />
declare namespace PersistenceModule {
/**
* ```
(get) captureScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the capture scope.
*/
const captureScope: StorageScope;
/**
* ```
(get) sharedScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the shared scope.
*/
const sharedScope: StorageScope;
/**
* ```
(get) userScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the user scope.
*/
const userScope: StorageScope;
}
export = PersistenceModule;
