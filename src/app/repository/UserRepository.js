"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RepositoryBase_1 = require("../core/RepositoryBase");
var UserSchema = require("../shema/UserSchema");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, UserSchema) || this;
    }
    return UserRepository;
}(RepositoryBase_1.RepositoryBase));
exports.UserRepository = UserRepository;
