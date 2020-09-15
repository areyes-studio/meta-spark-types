/** 
 * The `AntiderivativeOverflowBehaviour` enum describes the recovery technique used when an antiderivative overflows.
 * @property CLAMP Clamp to either min and max
 * @property WRAP Start from the other end of the interval (min,max)
 */ 
declare interface AntiderivativeOverflowBehaviour{ 
CLAMP, 
WRAP, 
} 
