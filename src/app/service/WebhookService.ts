import {IWebhookService} from "./IWebhookService";
import {inject, injectable} from "inversify";
import {IFacebookService} from "../core/IFacebookService";

var Q = require("q");

@injectable()
export class WebhookService implements IWebhookService {
    constructor(@inject("IFacebookService") private facebookService: IFacebookService)

    public processMessage(data: any) {
        this.facebookService.sendGenericMessage("309677339443781");
        return Q(true);
    }
}
