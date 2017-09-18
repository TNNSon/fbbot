"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MAX_RETRY_TIMES = 30;
var RECONNECT_INTERVAL = 1000;
// singleton pattern
var MongooseConnection = /** @class */ (function () {
    function MongooseConnection() {
    }
    Object.defineProperty(MongooseConnection, "connect", {
        get: function () {
            if (this.instance) {
                return this.instance;
            }
            var retryTimes = MAX_RETRY_TIMES;
            function connectWithRetry() {
                var connectionString = "mongodb://".concat(process.env.DB_CONNECTION || "localhost:27017")
                    .concat("/").concat(process.env.DB_NAME || "facebook");
                return mongoose.connect(connectionString, { config: { autoIndex: false }, useMongoClient: true }, function (err) {
                    if (err) {
                        if (!MongooseConnection.isSigint && err.message && err.message.match(/failed to connect to server .* on first connect/) && retryTimes !== 0) {
                            setTimeout(connectWithRetry, RECONNECT_INTERVAL);
                            retryTimes--;
                        }
                    }
                });
            }
            ;
            connectWithRetry();
            this.instance = mongoose;
            this.instance.connection.on('connected', function () {
                retryTimes = MAX_RETRY_TIMES;
            });
            this.instance.connection.on('error', function (err) {
                console.log("connection db err: " + err);
            });
            this.instance.connection.on('disconnected', function () {
                console.log('Database connection disconnected');
            });
            process.on('SIGTERM', function () {
                MongooseConnection.instance.connection.close(function () {
                    console.log('Database connection disconnected through app termination');
                    process.exit(0);
                });
            });
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    MongooseConnection.isSigint = false;
    return MongooseConnection;
}());
exports.MongooseConnection = MongooseConnection;
//# sourceMappingURL=MongooseConnection.js.map