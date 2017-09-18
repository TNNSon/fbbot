export interface IWebhookController {
    get(req: any, res: any): any;

    processMessage(req: any, res: any): any;
}