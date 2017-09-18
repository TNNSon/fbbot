"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v1_0_1 = require("./v1.0");
var RouteRegistration = /** @class */ (function () {
    function RouteRegistration() {
    }
    RouteRegistration.register = function (app) {
        // API version handler setup
        // version.use({
        //     header: 'Accept-Version',
        //     grab: /([0-9]*\.?[0-9]+)/,
        //     error: 406
        // });
        // app.use((req, res, next) => {
        //     // Set accept-version header to the latest if not set
        //     if (typeof req.headers['accept-version'] == 'undefined' || !req.headers['accept-version'])
        //         req.headers['accept-version'] = '1.0';
        //     next();
        // }, version.reroute({
        //     1.0: require(__dirname + '/v1.0').register()
        // }));
        v1_0_1.V1RouteRegistration.register();
        app.use(function (req, res, next) {
            next();
        });
        // Catch-all middleware to return a 404 if no route
        app.use(function (req, res) {
            res.status(404).end();
            //res.json("not found");
        });
    };
    return RouteRegistration;
}());
exports.RouteRegistration = RouteRegistration;
