/// <reference path="../Prefabs.Prefab/index.d.ts" />
/// <reference path="../Prefabs.State/index.d.ts" />
declare class PrefabsModule {
/**
*  
 * findFirst(name: string): Promise<Prefab | null>
 *  
 * 
 * Returns a promise that is resolved with the prefab of a requested name or null if none was found.
 * **See Also**: `Prefabs.findUsingPattern`, `Prefabs.getAll`.
 */
static findFirst(name: string): Promise<Prefab | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Prefab>>
 *  
 * 
 * Returns a promise that is resolved with the all of the prefabs matching the name pattern or empty array if none was found.
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the prefabs.
 * `findUsingPattern("*A")` will retrieve all of the prefabs suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the prefabs prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the prefabs containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Prefabs.getAll`, `Prefabs.findFirst`.
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Prefab>>;

/**
*  
 * getAll(): Promise<Array<Prefab>>
 *  
 * 
 * Returns a promise that is resolved with all of the prefabs.
 * **See Also**: `Prefabs.findUsingPattern`, `Prefabs.findFirst`.
 */
static getAll(): Promise<Array<Prefab>>;

/**
 * The `State` enum describes the state of a `Prefab`.
 * @property AVAILABLE Indicates that the resource has been downloaded and is available.
 * @property DEFAULT Indicates that the prefab is in the default state.
 * @property FAILED Indicates that the resource failed to download.
 * @property PENDING Indicates that the resource download is pending.
 */
static readonly State: {
  AVAILABLE: "AVAILABLE",
  DEFAULT: "DEFAULT",
  FAILED: "FAILED",
  PENDING: "PENDING",
}
}
export = PrefabsModule;
