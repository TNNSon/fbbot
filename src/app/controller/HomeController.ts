import {injectable} from "inversify";
import {IHomeController} from "./IHomeController";

@injectable()
export class HomeController implements IHomeController {
    constructor() {

    }

    public get(req: any, res: any): any {
        res.send("Home page");
    }
}
