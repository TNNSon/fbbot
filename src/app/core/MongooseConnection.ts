import mongoose = require("mongoose");

const MAX_RETRY_TIMES = 30;
const RECONNECT_INTERVAL = 1000;

// singleton pattern
export class MongooseConnection {
    private static instance: mongoose.Mongoose;
    private static isSigint = false;

    static get connect(): any {
        if (this.instance) {
            return this.instance;
        }

        let retryTimes = MAX_RETRY_TIMES;

        function connectWithRetry() {
            let connectionString = "mongodb://".concat(process.env.DB_CONNECTION || "localhost:27017")
                .concat("/").concat(process.env.DB_NAME || "facebook");

            return mongoose.connect(connectionString, {config: {autoIndex: false}, useMongoClient: true},(err: any) => {
                if (err) {
                    if (!MongooseConnection.isSigint && err.message && err.message.match(/failed to connect to server .* on first connect/) && retryTimes !== 0) {
                        setTimeout(connectWithRetry, RECONNECT_INTERVAL);
                        retryTimes--;
                    }
                }
            })
        };

        connectWithRetry();

        this.instance = mongoose;

        this.instance.connection.on('connected', () => {
            retryTimes = MAX_RETRY_TIMES;
        });

        this.instance.connection.on('error', (err: any) => {
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
    }

    private constructor() {
    }
}