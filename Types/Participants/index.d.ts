/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Participants.Participant/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class ParticipantsModule {
/**
* ```
(get) otherParticipantCount: ScalarSignal
(set) (Not Available)
```

The total number of participants in the video call, not including the current participant (`self`), as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
static readonly otherParticipantCount: ScalarSignal;
/**
* ```
(get) self: Promise<Participant>
(set) (Not Available)
```

The current user, as a [`Participant`](/classes/ParticipantsModule.Participant) object.
*/
static readonly self: Promise<Participant>;
/**
*  
 * getAllOtherParticipants(): Promise<Array<Participant>>
 *  
 * 
 * Returns an array of [`Participant`](/classes/ParticipantsModule.Participant) objects containing all of the other participants in the current video call, not including the current user (`self`).
 */
static getAllOtherParticipants(): Promise<Array<Participant>>;

/**
*  
 * getParticipantById(id: string): Promise<Participant>
 *  
 * 
 * Returns the [`Participant`](/classes/ParticipantsModule.Participant) object attached to the unique ID specified.
 * A `Participant` object's unique ID is accessible via its `id` property. For example:
 * 
 *  
 * const otherParticipants = await Participants.getAllOtherParticipants();
 * const participant = otherParticipants[0];
 * const participantId = participant.id;
 * 
 * // Retrieves the above participant via its unique ID
 * const sameParticipant = Participants.getParticipantById(participantId)
 *  
 */
static getParticipantById(id: string): Promise<Participant>;

/**
*  
 * onOtherParticipantAdded(): EventSource<Participant>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) object that emits a new [`Participant`](/classes/ParticipantsModule.Participant) object each time a new participant joins the video call. For example:
 *  
 * Participants.onOtherParticipantAdded().subscribe((participant) => {
 *     // const newParticipantId = participant.id;
 * });
 *  
 */
static onOtherParticipantAdded(): EventSource<Participant>;

}
export = ParticipantsModule;
