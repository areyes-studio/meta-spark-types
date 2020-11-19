/**
 * The `TrackingStateReason` enum describes the possible reasons why the world tracker may be experiencing limited tracking quality. Used by `WorldTrackingModule.stateReason`, if the value returned by `WorldTrackingModule.state` is `LIMITED`.
 * @property EXCESSIVE_MOTION The device is moving too fast for accurate tracking.
 * @property INITIALIZING The world tracker is initializing.
 * @property INSUFFICIENT_FEATURES The scene does not contain sufficient distinguishing features for accurate tracking.
 * @property INSUFFICIENT_LIGHT The scene is not sufficiently lit for accurate tracking.
 * @property NONE The world tracker is not experiencing limited tracking quality.
 */
declare interface TrackingStateReason{
EXCESSIVE_MOTION,
INITIALIZING,
INSUFFICIENT_FEATURES,
INSUFFICIENT_LIGHT,
NONE,
}
