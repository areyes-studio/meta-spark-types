/// <reference path="../Scene.TextAlignment/index.d.ts" />
/// <reference path="../Scene.VerticalTextAlignment/index.d.ts" />
declare interface TextAlignmentWrapper {
/** 
* ```
(get) horizontal: Signal<TextAlignment>
(set) horizontal: Signal<TextAlignment>
```

Specifies the horizontal text alignment.
*/ 
horizontal: Signal<TextAlignment>;
/** 
* ```
(get) vertical: Signal<VerticalTextAlignment>
(set) vertical: Signal<VerticalTextAlignment>
```

Specifies the vertical text alignment.
*/ 
vertical: Signal<VerticalTextAlignment>;
}
