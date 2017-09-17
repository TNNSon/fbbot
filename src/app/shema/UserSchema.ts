import mongoose = require("mongoose");

class UserSchema {
    static get schema() {
        let schema = new mongoose.Schema({
            name: {
                first: String,
                last: {
                    type: String,
                    trim: true
                }
            }
        });

        return schema;
    }
}

export = mongoose.model('users', UserSchema.schema);
