declare class IdentityModule {
/**
*  
 * getAccessToken(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with Access Token `string` object or an error.
 */
static getAccessToken(): Promise<string>;

/**
*  
 * getAppScopedID(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with App Scope ID `string` object or an error.
 */
static getAppScopedID(): Promise<string>;

/**
*  
 * getEmailAddress(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with user Email Address `string` object or an error.
 */
static getEmailAddress(): Promise<string>;

/**
*  
 * getFullName(): Promise<string>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with user Full Name `string` object or an error.
 */
static getFullName(): Promise<string>;

}
export = IdentityModule;
