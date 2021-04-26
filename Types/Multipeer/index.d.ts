/// <reference path="../Multipeer.MessageChannel/index.d.ts" />
declare class MultipeerModule {
/**
*  
 * getMessageChannel(topic: string): MessageChannel
 *  
 * 
 * Get access to named message channel or GLOBAL channel by default
 */
static getMessageChannel(topic: string): MessageChannel;

}
export = MultipeerModule;
