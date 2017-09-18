"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IocConfig_1 = require("./v1.0/IocConfig");
var express_1 = require("express");
var WebhookRoute_1 = require("./v1.0/WebhookRoute");
var HomeRoute_1 = require("./v1.0/HomeRoute");
var V1RouteRegistration = /** @class */ (function () {
    function V1RouteRegistration() {
    }
    V1RouteRegistration.register = function () {
        global["IocContainer"] = IocConfig_1.default;
        var iocContainer = global["IocContainer"];
        var router = express_1.Router();
        router.use("/", new HomeRoute_1.HomeRoute(iocContainer).routes);
        router.use("/webhook", new WebhookRoute_1.WebhookRoute(iocContainer).routes);
        return router;
    };
    return V1RouteRegistration;
}());
exports.V1RouteRegistration = V1RouteRegistration;
