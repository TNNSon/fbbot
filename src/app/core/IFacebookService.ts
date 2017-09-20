export interface IFacebookService {
    sendTextMessage(recipientId: string, messageText: string): any;
    sendGenericMessage(recipientId: string): any;
}
