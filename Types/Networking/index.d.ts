declare namespace NetworkingModule {
/** 
*  
 * fetch(url: string, request?: {body: string, headers: {[key: string]: string}, method: string}): Promise<ResponseObject>
 *  
 * 
 * Returns a promise for the result of the call. A `then()` clause attached to this takes a single argument;
 * that argument is a callback function which takes a single argument, which is the result of the call.
 * The result of the call is an object with two elements: A status property indicating the HTTP response status of the call,
 * and `json()` function, which returns a promise for the dictionary containing the body of the response (which is expected to be JSON).
 */ 
function fetch(url: string, request?: {body: string, headers: {[key: string]: string}, method: string}): Promise<ResponseObject>;

} 
export = NetworkingModule;