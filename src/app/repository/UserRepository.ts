import {RepositoryBase} from "../core/RepositoryBase";
import {UserModel} from "../model/UserModel";

var UserSchema = require("../shema/UserSchema");

export class UserRepository extends RepositoryBase<UserModel> {
    constructor() {
        super(UserSchema);
    }
}