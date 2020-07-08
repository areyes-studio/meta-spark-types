/// <reference path="../ConstBoolSignal/index.d.ts" />
declare interface CameraVisibility {
/** 
* ```
(get) forUnspecifiedCamera: ConstBoolSignal
(set) forUnspecifiedCamera: BoolSignal
```

Specifies whether the object is visible when the active camera couldn't be specified.
*/ 
forUnspecifiedCamera: ConstBoolSignal;
/** 
* ```
(get) forFrontCamera: ConstBoolSignal
(set) forFrontCamera: BoolSignal
```

Specifies whether the object is visible when the front camera is the active one.
*/ 
forFrontCamera: ConstBoolSignal;
/** 
* ```
(get) forBackCamera: ConstBoolSignal
(set) forBackCamera: BoolSignal
```

Specifies whether the object is visible when the back camera is the active one.
*/ 
forBackCamera: ConstBoolSignal;
} 
