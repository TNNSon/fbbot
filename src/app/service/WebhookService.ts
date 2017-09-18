import {IWebhookService} from "./IWebhookService";
import {injectable} from "inversify";

@injectable()
export class WebhookService implements IWebhookService {
    public processMessage(data: any) {
        console.log("test")
    }
}