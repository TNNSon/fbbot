import kernel from "./v1.0/IocConfig";
import {Router} from "express";
import {WebhookRoute} from "./v1.0/WebhookRoute";
import {HomeRoute} from "./v1.0/HomeRoute";

export class V1RouteRegistration {
    static register(): any {
        global["IocContainer"] = kernel;
        let iocContainer = global["IocContainer"];
        var router = Router();

        router.use("/", new HomeRoute(iocContainer).routes);

        router.use("/webhook", new WebhookRoute(iocContainer).routes);

        return router;
    }
}
