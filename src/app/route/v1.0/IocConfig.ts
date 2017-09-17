import "reflect-metadata";
import {Container} from "inversify";
import {WebhookController} from "../../controller/WebhookController";
import {IWebhookController} from "../../controller/IWebhookController";
import {IHomeController} from "../../controller/IHomeController";
import {HomeController} from "../../controller/HomeController";
import {RepositoryBase} from "../../core/RepositoryBase";

class IocConfig {
    static init(): Container {
        let kernel: Container = new Container();

        kernel.bind<IWebhookController>("IWebhookController").to(WebhookController);
        kernel.bind<IHomeController>("IHomeController").to(HomeController);

        kernel.bind<IRepositoryBase>("IRepositoryBase").to(RepositoryBase);

        return kernel;
    }
}

export default IocConfig.init();
