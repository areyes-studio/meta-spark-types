/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
declare namespace FaceGesturesModule {
/** 
*  
 * hasEyebrowsFrowned(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has frowned eyebrows. When specified:
 */function hasEyebrowsFrowned(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * hasEyebrowsRaised(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has raised eyebrows. When specified:
 */function hasEyebrowsRaised(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * hasLeftEyeClosed(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has its left eye open. When specified:
 */function hasLeftEyeClosed(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * hasMouthOpen(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has an open mouth. When specified:
 */function hasMouthOpen(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * hasRightEyeClosed(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has its right eye open. When specified:
 */function hasRightEyeClosed(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isAngry(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is an angry face.
 */function isAngry(face: Face): BoolSignal
 ;

/** 
*  
 * isHappy(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is a happy face.
 */function isHappy(face: Face): BoolSignal
 ;

/** 
*  
 * isKissing(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is a kissing face.
 */function isKissing(face: Face): BoolSignal
 ;

/** 
*  
 * isLeanedBack(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning back. When specified:
 */function isLeanedBack(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isLeanedForward(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning forward. When specified:
 */function isLeanedForward(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isLeanedLeft(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning to the left. When specified:
 */function isLeanedLeft(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isLeanedRight(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning to the right. When specified:
 */function isLeanedRight(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isNeutral(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is a neutral face.
 */function isNeutral(face: Face): BoolSignal
 ;

/** 
*  
 * isSad(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is a sad face.
 */function isSad(face: Face): BoolSignal
 ;

/** 
*  
 * isSmiling(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified face is smiling. A smile is detected when a weighted sum of lip curvatures (`mouth.upperLipCurvature` and `mouth.lowerLipCurvature`) reaches a threshold. When specified:
 */function isSmiling(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isSurprised(face: Face): BoolSignal
 *  
 * 
 * Returns a`BoolSignal` that indicates whether the specified`Face` object is a surprised face.
 */function isSurprised(face: Face): BoolSignal
 ;

/** 
*  
 * isTurnedLeft(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is turned to the left. When specified:
 */function isTurnedLeft(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * isTurnedRight(face: Face, config: ): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is turned to the right. When specified:
 */function isTurnedRight(face: Face, config: ): BoolSignal
 ;

/** 
*  
 * onBlink(face: Face, config: ): EventSource
 *  
 * 
 * Returns an `EventSource` that fires when both eyes are closed. An eye is considered closed when its `openness` falls below a certain configurable threshold. When specified:
 */function onBlink(face: Face, config: ): EventSource
 ;

/** 
*  
 * onNod(face: Face, config: ): EventSource
 *  
 * 
 * Returns an `EventSource` that fires immediately after a face nod is detected.
 * A face nod is a series of consecutive head swing down and up, the first movement is downwards.
 * A swing is detected if the head rotates around the X axis by the specified threshold angle within the specified period of time.
 * The threshold, the period and the number of swings can be configured.
 * When specified:
 */function onNod(face: Face, config: ): EventSource
 ;

/** 
*  
 * onShake(face: Face, config: ): EventSource
 *  
 * 
 * Returns an `EventSource` that fires immediately after a face shake is detected.
 * A face shake is a series of consecutive head swings right and left.
 * A swing is detected if the head rotates around the Y axis by the specified threshold angle within the specified period of time.
 * The threshold, the period and the number of swings can be configured.
 * When specified:
 */function onShake(face: Face, config: ): EventSource
 ;

} 
export = FaceGesturesModule;