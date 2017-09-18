"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Q = require("q");
var RepositoryBase = /** @class */ (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.retrieve = function (filter) {
        return this._model.find(filter);
    };
    RepositoryBase.prototype.create = function (item) {
        return Q(this._model.create(item));
    };
    RepositoryBase.prototype.findById = function (modelId) {
        return Q(this._model.findById(modelId));
    };
    RepositoryBase.prototype.delete = function (_id) {
        return this._model.remove({ _id: this.toObjectId(_id) });
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
