/**
 * The `TrackingMode` enum describes how a PlaneTracker is tracking an object.
 * @property ARBITRARY_DEPTH Indicates that the plane tracker is tracking at an arbitrary depth.
 * @property MOVING_OBJECT Indicates that a moving object is being tracked.
 * @property PLANE Indicates that a horizontal plane is being tracked.
 * @property VERTICAL_PLANE Indicates that a vertical plane is being tracked.
 */
declare interface TrackingMode{
ARBITRARY_DEPTH,
MOVING_OBJECT,
PLANE,
VERTICAL_PLANE,
}
