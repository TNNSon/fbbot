import {injectable} from "inversify";
import {IWebhookController} from "./IWebhookController";

@injectable()
export class WebhookController implements IWebhookController {
    constructor() {

    }

    public get(req: any, res: any): any {
        if (req.query["hub.verify_token"] === "anh_hoang_dep_trai_vo_doi") {
            res.send(req.query["hub.challenge"]);
        }
        res.send("Error, wrong validation token");
    }
}
