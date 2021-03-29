/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../TouchGestures.LongPressGesture/index.d.ts" />
/// <reference path="../TouchGestures.PanGesture/index.d.ts" />
/// <reference path="../TouchGestures.PinchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RawTouchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RotateGesture/index.d.ts" />
/// <reference path="../TouchGestures.TapGesture/index.d.ts" />
declare class TouchGesturesModule {
/**
*  
 * onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits a [`LongPressGesture`](/classes/touchgesturesmodule.longpressgesture) object for each long-press interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>;

/**
*  
 * onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits a [`PanGesture`](/classes/touchgesturesmodule.pangesture) object for each pan interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>;

/**
*  
 * onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits a [`PinchGesture`](/classes/touchgesturesmodule.pinchgesture) object for each pinch interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>;

/**
*  
 * onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource),
 * to which you may subscribe, that emits a `RawTouch` object for each touch interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>;

/**
*  
 * onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits a [`RotateGesture`](/classes/touchgesturesmodule.rotategesture) object for each rotate interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>;

/**
*  
 * onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits a [`TapGesture`](/classes/touchgesturesmodule.tapgesture) object for each tap interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */
static onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>;

/**
 * The `GestureType` enum describes the type of a given `Gesture`.
 * @property LONG_PRESS Indicates the long-press gesture.
 * @property PAN Indicates the pan gesture.
 * @property PINCH Indicates the pinch gesture.
 * @property RAW_TOUCH Indicates the raw touch gesture.
 * @property ROTATE Indicates the rotate gesture.
 * @property TAP Indicates the tap gesture.
 */
static readonly GestureType: {
  LONG_PRESS: "LONG_PRESS",
  PAN: "PAN",
  PINCH: "PINCH",
  RAW_TOUCH: "RAW_TOUCH",
  ROTATE: "ROTATE",
  TAP: "TAP",
}
}
export = TouchGesturesModule;
