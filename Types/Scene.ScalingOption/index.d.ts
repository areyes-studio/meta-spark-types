/** 
 * The `ScalingOption` enum describes how an element is scaled.
 * @property FILL Indicates that the resource is is tiled to fill the container.
 * @property FIT Indicates that the resource is scaled proportionately such that the larger dimension, height or width, matches the size of the container.
 * @property FIT_HEIGHT Indicates that the resource is scaled proportionately to match the height of the container.
 * @property FIT_WIDTH Indicates that the resource is scaled proportionately to match the width of the container.
 * @property IGNORE Indicates that no scaling is applied to the element.
 * @property STRETCH Indicates that the resource is stretched in the height and width dimensions to fill the container.
 */ 
declare interface ScalingOption{ 
FILL, 
FIT, 
FIT_HEIGHT, 
FIT_WIDTH, 
IGNORE, 
STRETCH, 
} 
