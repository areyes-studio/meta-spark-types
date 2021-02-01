/**
 * The `TrackingState` enum describes the states that the world tracker can be in. Used by
`WorldTrackingModule.state`.
 * @property LIMITED Tracking is initializing or has paused.
 * @property NOT_AVAILABLE Tracking has not started or has stopped.
 * @property TRACKING Tracking is running normally.
 */
declare interface TrackingState{
LIMITED,
NOT_AVAILABLE,
TRACKING,
}
