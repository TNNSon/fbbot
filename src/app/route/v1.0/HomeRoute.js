"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var HomeRoute = /** @class */ (function () {
    function HomeRoute(kernel) {
        this._kernel = kernel;
        this.regHomeRoute();
    }
    HomeRoute.prototype.regHomeRoute = function () {
        var homeController = this._kernel.get("IHomeController");
        router.route("/")
            .get(homeController.get.bind(homeController));
    };
    Object.defineProperty(HomeRoute.prototype, "routes", {
        get: function () {
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HomeRoute;
}());
exports.HomeRoute = HomeRoute;
