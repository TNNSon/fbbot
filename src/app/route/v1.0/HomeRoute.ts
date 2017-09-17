import {interfaces} from "inversify";
import express = require("express");
import {IHomeController} from "../../controller/IHomeController";
let router = express.Router();

export class HomeRoute {
    private _kernel: interfaces.Container;

    constructor(kernel: interfaces.Container) {
        this._kernel = kernel;
        this.regHomeRoute();
    }

    private regHomeRoute(): any {
        let homeController = this._kernel.get<IHomeController>("IHomeController");

        router.route("/")
            .get(homeController.get.bind(homeController));
    }

    get routes() {
        return router;
    }
}
