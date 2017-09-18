import {inject, injectable} from "inversify";
import {IWebhookController} from "./IWebhookController";
import {IWebhookService} from "../service/IWebhookService";

@injectable()
export class WebhookController implements IWebhookController {
    constructor(@inject("IWebhookService") private _webhookService: IWebhookService) {

    }

    public get(req: any, res: any): any {
        if (req.query["hub.verify_token"] === "123456789") {
            res.send(req.query["hub.challenge"]);
        }
        res.send("Error, wrong validation token");
    }

    public processMessage(req: any, res: any): any{
        return this._webhookService.processMessage(req.body);
    }
}
