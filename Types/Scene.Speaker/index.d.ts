/// <reference path="../Scene.AudioTransformWrapper/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Speaker {
/**
* ```
(get) volume: ScalarSignal
(set) volume: ScalarSignal
```

Specifies the volume of the speaker in the range of [0.0, 1.0].
Note: To access this property you need to enable the AudioSourceVolume API capability.
*/
volume: ScalarSignal | number;
/**
* ```
(get) volume: ScalarSignal
(set) volume: ScalarSignal
```

Specifies the volume of the speaker in the range of [0.0, 1.0].
Note: To access this property you need to enable the AudioSourceVolume API capability.
*/
volume: ScalarSignal | number;
/**
*  
 * audioTransformAtIndex(index: number): AudioTransformWrapper
 *  
 * 
 */
audioTransformAtIndex(index: number): AudioTransformWrapper;

/**
*  
 * audioTransformsCount(): number
 *  
 * 
 */
audioTransformsCount(): number;

/**
*  
 * isPlaying(): ScalarSignal
 *  
 * 
 * Returns a `BooleanSignal` indicating whether this audio source is playing.
 */
isPlaying(): ScalarSignal;

/**
*  
 * minProgress(): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` indicating the timestamp of the played audio source instance with lowest timestamp. A value of zero is returned if the audio source is not currently playing.
 */
minProgress(): ScalarSignal;

}
