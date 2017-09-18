export interface IRepositoryBase {
    retrieve(filter: any): any;

    create(item: any): any;

    findById(modelId: string): any;

    delete(_id: string): any;

    toObjectId (_id: string): any;
}