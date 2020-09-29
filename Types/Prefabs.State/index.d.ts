/**
 * The `State` enum describes the state of a prefab mesh.
 * @property AVAILABLE Indicates that the resource has been downloaded.
 * @property DEFAULT Indicates the the prefab is in the default state.
 * @property FAILED Indicates that the resource failed to download.
 * @property PENDING Indicates that the resource download is pending.
 */
declare interface State{
AVAILABLE,
DEFAULT,
FAILED,
PENDING,
}
