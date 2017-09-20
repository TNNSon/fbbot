import {inject, injectable} from "inversify";
import {IWebhookController} from "./IWebhookController";
import {IWebhookService} from "../service/IWebhookService";

@injectable()
export class WebhookController implements IWebhookController {
    constructor(@inject("IWebhookService") private _webhookService: IWebhookService) {

    }

    public get(req: any, res: any): any {
        if (req.query["hub.verify_token"] === process.env.APP_FACEBOOK_TOKEN) {
            res.send(req.query["hub.challenge"]);
        }
        res.send("Error, wrong validation token");
    }

    public processMessage(req: any, res: any): any {
        return this._webhookService.processMessage(req.body)
            .then((rs: any) => {
                return res.status(200).json({status: "ok"});
            });
    }
}
