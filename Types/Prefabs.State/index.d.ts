/**
 * The `State` enum describes the state of a `Prefab`.
 * @property AVAILABLE Indicates that the resource has been downloaded and is available.
 * @property DEFAULT Indicates that the prefab is in the default state.
 * @property FAILED Indicates that the resource failed to download.
 * @property PENDING Indicates that the resource download is pending.
 */
declare interface State{
AVAILABLE,
DEFAULT,
FAILED,
PENDING,
}
