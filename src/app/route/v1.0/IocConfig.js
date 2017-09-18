"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var WebhookController_1 = require("../../controller/WebhookController");
var HomeController_1 = require("../../controller/HomeController");
var RepositoryBase_1 = require("../../core/RepositoryBase");
var WebhookService_1 = require("../../service/WebhookService");
var WitAI_1 = require("../../core/WitAI");
var IocConfig = /** @class */ (function () {
    function IocConfig() {
    }
    IocConfig.init = function () {
        var kernel = new inversify_1.Container();
        kernel.bind("IWebhookController").to(WebhookController_1.WebhookController);
        kernel.bind("IHomeController").to(HomeController_1.HomeController);
        kernel.bind("IRepositoryBase").to(RepositoryBase_1.RepositoryBase);
        kernel.bind("IWebhookService").to(WebhookService_1.WebhookService);
        kernel.bind("IWitAI").to(WitAI_1.WitAI);
        return kernel;
    };
    return IocConfig;
}());
exports.default = IocConfig.init();
