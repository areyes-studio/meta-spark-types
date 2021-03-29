/// <reference path="../Persistence.StorageScope/index.d.ts" />
declare class PersistenceModule {
/**
* ```
(get) captureScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the capture scope.
*/
static readonly captureScope: StorageScope;
/**
* ```
(get) sharedScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the shared scope.
*/
static readonly sharedScope: StorageScope;
/**
* ```
(get) userScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the user scope.
*/
static readonly userScope: StorageScope;
}
export = PersistenceModule;
