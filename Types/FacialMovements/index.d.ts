/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class FacialMovementsModule {
/**
*  
 * innerBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `InnerBrowUp`.
 */
static innerBrowUp(face: Face): ScalarSignal;

/**
*  
 * jawDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `JawDown`.
 */
static jawDown(face: Face): ScalarSignal;

/**
*  
 * leftBrowDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftBrowDown`.
 */
static leftBrowDown(face: Face): ScalarSignal;

/**
*  
 * leftEyeClose(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeClose`.
 */
static leftEyeClose(face: Face): ScalarSignal;

/**
*  
 * leftEyeSquint(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeSquint`.
 */
static leftEyeSquint(face: Face): ScalarSignal;

/**
*  
 * leftLipsCornerUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLipsCornerUp`.
 */
static leftLipsCornerUp(face: Face): ScalarSignal;

/**
*  
 * leftLowerLipDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLowerLipDown`.
 */
static leftLowerLipDown(face: Face): ScalarSignal;

/**
*  
 * leftMouthDimple(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftMouthDimple`.
 */
static leftMouthDimple(face: Face): ScalarSignal;

/**
*  
 * leftOuterBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftOuterBrowUp`.
 */
static leftOuterBrowUp(face: Face): ScalarSignal;

/**
*  
 * leftUpperEyeLidUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperEyeLidUp`.
 */
static leftUpperEyeLidUp(face: Face): ScalarSignal;

/**
*  
 * leftUpperLipUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperLipUp`.
 */
static leftUpperLipUp(face: Face): ScalarSignal;

/**
*  
 * lipFunnel(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipFunnel`.
 */
static lipFunnel(face: Face): ScalarSignal;

/**
*  
 * lipsMoveLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveLeft`.
 */
static lipsMoveLeft(face: Face): ScalarSignal;

/**
*  
 * lipsMoveRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveRight`.
 */
static lipsMoveRight(face: Face): ScalarSignal;

/**
*  
 * lipsPucker(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsPucker`.
 */
static lipsPucker(face: Face): ScalarSignal;

/**
*  
 * lowerLipOut(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LowerLipOut`.
 */
static lowerLipOut(face: Face): ScalarSignal;

/**
*  
 * rightBrowDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightBrowDown`.
 */
static rightBrowDown(face: Face): ScalarSignal;

/**
*  
 * rightEyeClose(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeClose`.
 */
static rightEyeClose(face: Face): ScalarSignal;

/**
*  
 * rightEyeSquint(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeSquint`.
 */
static rightEyeSquint(face: Face): ScalarSignal;

/**
*  
 * rightLipsCornerUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLipsCornerUp`.
 */
static rightLipsCornerUp(face: Face): ScalarSignal;

/**
*  
 * rightLowerLipDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLowerLipDown`.
 */
static rightLowerLipDown(face: Face): ScalarSignal;

/**
*  
 * rightMouthDimple(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightMouthDimple`.
 */
static rightMouthDimple(face: Face): ScalarSignal;

/**
*  
 * rightOuterBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightOuterBrowUp`.
 */
static rightOuterBrowUp(face: Face): ScalarSignal;

/**
*  
 * rightUpperEyeLidUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperEyeLidUp`.
 */
static rightUpperEyeLidUp(face: Face): ScalarSignal;

/**
*  
 * rightUpperLipUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperLipUp`.
 */
static rightUpperLipUp(face: Face): ScalarSignal;

/**
*  
 * upperLipOut(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `UpperLipOut`.
 */
static upperLipOut(face: Face): ScalarSignal;

}
export = FacialMovementsModule;
