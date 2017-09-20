import {IFacebookService} from "./IFacebookService";
import {injectable} from "inversify";

var request = require("request");
var Q = require("q");

@injectable()
export class FacebookService implements IFacebookService {
    constructor() {

    }


    sendGenericMessage(recipientId: string): any {
        var messageData = {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [{
                            title: "rift",
                            subtitle: "Next-generation virtual reality",
                            item_url: "https://www.oculus.com/en-us/rift/",
                            image_url: "http://messengerdemo.parseapp.com/img/rift.png",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.oculus.com/en-us/rift/",
                                title: "Open Web URL"
                            }, {
                                type: "postback",
                                title: "Call Postback",
                                payload: "Payload for first bubble",
                            }],
                        }, {
                            title: "touch",
                            subtitle: "Your Hands, Now in VR",
                            item_url: "https://www.oculus.com/en-us/touch/",
                            image_url: "http://messengerdemo.parseapp.com/img/touch.png",
                            buttons: [{
                                type: "web_url",
                                url: "https://www.oculus.com/en-us/touch/",
                                title: "Open Web URL"
                            }, {
                                type: "postback",
                                title: "Call Postback",
                                payload: "Payload for second bubble",
                            }]
                        }]
                    }
                }
            }
        };

        this.sendFacebookApi(process.env.PAGE_TOKEN, messageData);
    }

        sendTextMessage(recipientId: string, messageText: string): any {
        let messageData: Object = {
            message: {
                text: messageText
            },
            recipient: {
                id: recipientId
            }
        };

        this.sendFacebookApi(process.env.PAGE_TOKEN, messageData);
    }

    sendFacebookApi(acceptToken: string, messageData: any): any {
        let defer: any = Q.defer();

        request({
            method: "POST",
            json: messageData,
            qs: {access_token: acceptToken},
            uri: "https://graph.facebook.com/v2.6/me/messages",

        }, (error: any, response: any, body: any) => {
            if (!error && response.statusCode === 200) {
                let recipientId: string = body.recipient_id;
                let messageId: string = body.message_id;
                defer.resolve(body);
                console.log("Successfully sent generic message with id %s to recipient %s",
                    messageId, recipientId);
            } else {
                console.error("Unable to send message.");
                console.error(response);
                console.error(error);
                defer.reject(error);
            }
        });

        return defer.promise;
    }

}
