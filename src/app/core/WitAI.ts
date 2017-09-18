import {IWitAI} from "./IWitAI";

var {Wit, log} = require("node-wit");
const client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG)
});

export class WitAI implements IWitAI{
    public callWit(messageText: string) {
        console.log("call wit");
        return client.message(messageText, {})
            .then((data: any) => {
                console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));

                return data;
            })
    }
}