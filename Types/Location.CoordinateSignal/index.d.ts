/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface CoordinateSignal {
/** 
* ```
                                        (get) latitude: ScalarSignal
                                        (set) (Not Available)
                                        ```
*/ 
latitude: ScalarSignal | number;
/** 
* ```
                                        (get) longitude: ScalarSignal
                                        (set) (Not Available)
                                        ```
*/ 
longitude: ScalarSignal | number;
} 
