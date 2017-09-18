"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var WebhookRoute = /** @class */ (function () {
    function WebhookRoute(kernel) {
        this._kernel = kernel;
        this.regWebhookRoute();
    }
    WebhookRoute.prototype.regWebhookRoute = function () {
        var webhookController = this._kernel.get("IWebhookController");
        router.route("/")
            .get(webhookController.get.bind(webhookController))
            .post(webhookController.processMessage.bind(webhookController));
    };
    Object.defineProperty(WebhookRoute.prototype, "routes", {
        get: function () {
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return WebhookRoute;
}());
exports.WebhookRoute = WebhookRoute;
