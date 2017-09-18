import {interfaces} from "inversify";
import express = require("express");
import {IWebhookController} from "../../controller/IWebhookController";

let router = express.Router();

export class WebhookRoute {
    private _kernel: interfaces.Container;

    constructor(kernel: interfaces.Container) {
        this._kernel = kernel;
        this.regWebhookRoute();
    }

    private regWebhookRoute(): any {
        let webhookController = this._kernel.get<IWebhookController>("IWebhookController");

        router.route("/")
            .get(webhookController.get.bind(webhookController))
            .post(webhookController.processMessage.bind(webhookController));
    }

    get routes() {
        return router;
    }
}
