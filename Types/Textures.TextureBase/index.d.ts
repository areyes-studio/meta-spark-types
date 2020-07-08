/// <reference path="../string/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface TextureBase {
/** 
* ```
(get) name: string
(set) (Not Available)
```

Specifies the unique texture name. The texture name is specified in AR Studio at design time.

**See Also**: `TexturesModule.get`.
*/ 
name: string;
/** 
* ```
(get) signal: ShaderSignal
```

Gets the RGBA ShaderSignal of the given texture. This signal can then be used in shader computations.
*/ 
signal: ShaderSignal;
/** 
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique texture identifier. This value is specified internally in AR Studio.
*/ 
identifier: string;
/** 
* ```
(get) width: ScalarSignal
```

Gets the width of the texture in pixels.
*/ 
width: ScalarSignal;
/** 
* ```
(get) height: ScalarSignal
```

Gets the height of the texture in pixels.
*/ 
height: ScalarSignal;
} 
