declare namespace IdentityModule {
/** 
*  
 * getAccessToken(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with Access Token `string` object or an error.
 */ 
function getAccessToken(): Promise<string>;

/** 
*  
 * getAppScopedID(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with App Scope ID `string` object or an error.
 */ 
function getAppScopedID(): Promise<string>;

/** 
*  
 * getEmailAddress(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with user Email Address `string` object or an error.
 */ 
function getEmailAddress(): Promise<string>;

/** 
*  
 * getFullName(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with user Full Name `string` object or an error.
 */ 
function getFullName(): Promise<string>;

}
export = IdentityModule;
