import "reflect-metadata";
import {Container} from "inversify";
import {WebhookController} from "../../controller/WebhookController";
import {IWebhookController} from "../../controller/IWebhookController";
import {IHomeController} from "../../controller/IHomeController";
import {HomeController} from "../../controller/HomeController";
import {RepositoryBase} from "../../core/RepositoryBase";
import {IRepositoryBase} from "../../core/IRepositoryBase";
import {IWebhookService} from "../../service/IWebhookService";
import {WebhookService} from "../../service/WebhookService";
import {IWitAI} from "../../core/IWitAI";
import {WitAI} from "../../core/WitAI";

class IocConfig {
    static init(): Container {
        let kernel: Container = new Container();

        kernel.bind<IWebhookController>("IWebhookController").to(WebhookController);
        kernel.bind<IHomeController>("IHomeController").to(HomeController);

        kernel.bind<IRepositoryBase>("IRepositoryBase").to(RepositoryBase);
        kernel.bind<IWebhookService>("IWebhookService").to(WebhookService);
        kernel.bind<IWitAI>("IWitAI").to(WitAI);

        return kernel;
    }
}

export default IocConfig.init();
