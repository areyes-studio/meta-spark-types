/// <reference path="../Reactive.EventSource/index.d.ts" />
declare namespace TouchGesturesModule {
/** 
*  
 * onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe,
 * that emits a [`LongPressGesture`](/docs/camera-effects/reference/touchgestures_module/longpressgesture_class) object for each long-press interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onLongPress(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

/** 
*  
 * onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe,
 * that emits a [`PanGesture`](/docs/camera-effects/reference/touchgestures_module/pangesture_class) object for each pan interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onPan(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

/** 
*  
 * onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe,
 * that emits a [`PinchGesture`](/docs/camera-effects/reference/touchgestures_module/pinchgesture_class) object for each pinch interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onPinch(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

/** 
*  
 * onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class),
 * to which you may subscribe, that emits a `RawTouch` object for each touch interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onRawTouch(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

/** 
*  
 * onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe,
 * that emits a [`RotateGesture`](/docs/camera-effects/reference/touchgestures_module/rotategesture_class) object for each rotate interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onRotate(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

/** 
*  
 * onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource
 *  
 * 
 * Returns an [`EventSource`](/docs/camera-effects/reference/reactive_module/eventsource_class), to which you may subscribe,
 * that emits a [`TapGesture`](/docs/camera-effects/reference/touchgestures_module/tapgesture_class) object for each tap interaction.
 * When `options` is specified, only events for the specified object are emitted.
 * Otherwise - events for entire preview screen are emitted.
 */ 
function onTap(options?: any | {normalizeCoordinates?: false | true, object?: any}): EventSource;

} 
export = TouchGesturesModule;