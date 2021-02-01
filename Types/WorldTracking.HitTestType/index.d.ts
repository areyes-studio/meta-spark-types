/**
 * The `HitTestType` enum lists the types of hit test supported.
 * @property ANY_PLANE Hit tests are performed on both horizontal and vertical surface planes.
 * @property FEATURE_POINT Hit tests are limited to feature points only.
 * @property HORIZONTAL_PLANE Hit tests are limited to horizontal surface planes only.
 * @property VERTICAL_PLANE Hit tests are limited to vertical surface planes only.
 */
declare interface HitTestType{
ANY_PLANE,
FEATURE_POINT,
HORIZONTAL_PLANE,
VERTICAL_PLANE,
}
