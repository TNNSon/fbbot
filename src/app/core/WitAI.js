"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("node-wit"), Wit = _a.Wit, log = _a.log;
var client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG)
});
var WitAI = /** @class */ (function () {
    function WitAI() {
    }
    WitAI.prototype.callWit = function (messageText) {
        console.log("call wit");
        return client.message(messageText, {})
            .then(function (data) {
            console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
            return data;
        });
    };
    return WitAI;
}());
exports.WitAI = WitAI;
