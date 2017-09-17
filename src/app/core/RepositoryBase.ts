import mongoose = require("mongoose");
var Q = require("q");

export class RepositoryBase<T> implements IRepositoryBase{
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>){
        this._model = schemaModel;
    }

    public retrieve(filter: any): any{
        return this._model.find(filter);
    }

    public create(item: any): any {
        return Q(this._model.create(item));
    }

    public findById(modelId: string): any {
        return Q(this._model.findById(modelId));
    }

    public delete(_id: string): any{
        return this._model.remove({_id: this.toObjectId(_id)});
    }

    public toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}