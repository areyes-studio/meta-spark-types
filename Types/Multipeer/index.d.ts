/// <reference path="../Multipeer.MessageChannel/index.d.ts" />
declare class MultipeerModule {
/**
*  
 * getMessageChannel(topic: string): MessageChannel
 *  
 * 
 * Returns the specified [`MessageChannel`](/classes/MultipeerModule.MessageChannel).
 * If no channel with the specified name is found, the `GLOBAL` channel is used by default.
 * 
 * * `topic` - the name of the message channel (topic) to retrieve.
 */
static getMessageChannel(topic: string): MessageChannel;

}
export = MultipeerModule;
