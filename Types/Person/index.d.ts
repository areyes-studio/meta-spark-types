/// <reference path="../BoundingBox/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../RightLeg/index.d.ts" />
/// <reference path="../Head/index.d.ts" />
/// <reference path="../LeftArm/index.d.ts" />
/// <reference path="../RightArm/index.d.ts" />
/// <reference path="../Torso/index.d.ts" />
/// <reference path="../LeftLeg/index.d.ts" />
declare interface Person {
/** 
* 
```
(get) box: BoundingBox
(set) (Not Available)
```

Gets the pose bounding box of the given person.

*/ 
box: BoundingBox;
/** 
* 
```
(get) poseId: number
(set) (Not Available)
```

Gets the unique pose ID of the given person.

*/ 
poseId: number;
/** 
* 
```
(get) rightLeg: RightLeg
(set) (Not Available)
```

Gets the right leg component of this person.

*/ 
rightLeg: RightLeg;
/** 
* 
```
(get) head: Head
(set) (Not Available)
```

Gets the head component of this person.

*/ 
head: Head;
/** 
* 
```
(get) leftArm: LeftArm
(set) (Not Available)
```

Gets the left arm component of this person.

*/ 
leftArm: LeftArm;
/** 
* 
```
(get) rightArm: RightArm
(set) (Not Available)
```

Gets the right arm component of this person.

*/ 
rightArm: RightArm;
/** 
* 
```
(get) torso: Torso
(set) (Not Available)
```

Gets the torso component of this person.

*/ 
torso: Torso;
/** 
* 
```
(get) leftLeg: LeftLeg
(set) (Not Available)
```

Gets the left leg component of this person.

*/ 
leftLeg: LeftLeg;
} 
