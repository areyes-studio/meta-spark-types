declare class GraphQLModule {
/**
*  
 * sendRequest(query: string, variables: {[variable: string]: any}): Promise<any>
 *  
 * 
 * Sends the GraphQL request with the given query string and variables
 * Returns a `JS Promise` or an error.
 */
static sendRequest(query: string, variables: {[variable: string]: any}): Promise<any>;

}
export = GraphQLModule;
