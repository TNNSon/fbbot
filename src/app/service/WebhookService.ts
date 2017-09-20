import {IWebhookService} from "./IWebhookService";
import {injectable} from "inversify";
var Q = require("q");

@injectable()
export class WebhookService implements IWebhookService {
    public processMessage(data: any) {
        console.log("test")
        var a = {
            "object": "page",
            "entry":
                [{
                    "id": "309677339443781",
                    "time": 1505724871440,
                    "messaging": [{
                        "sender": {"id": "1431065757000307"},
                        "recipient": {"id": "309677339443781"},
                        "timestamp": 1505724742643,
                        "message": {"mid": "mid.$cAAFDU3B52UdkxXWD81elDB9cxlCH", "seq": 8178, "text": "dds"}
                    }]
                }]
        }

        var c = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726369905,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505724742643,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxXWD81elDB9cxlCH", "seq": 8178, "text": "dds"}
                }]
            }]
        }

        var d = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726370678,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505724806303,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxXZ8n1elDF2KDgfB", "seq": 8179, "text": "23"}
                }]
            }]
        }

        var e = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726372449,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505724853708,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxXc1zFelDIvTbI9P", "seq": 8180, "text": ""}
                }]
            }]
        }

        var z = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726373225,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505724857557,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxXdE1VelDI-VtNDa", "seq": 8181, "text": ""}
                }]
            }]
        }

        var x = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726374988,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505724866052,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxXdmBFelDJfhjMyY", "seq": 8182, "text": "asd"}
                }]
            }]
        }

        var v = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726375720,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505725599035,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxYKVO1elD2Onq-Du", "seq": 8183, "text": "asd asd \nasd asd"}
                }]
            }]
        }

        var n = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726376454,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505725599568,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxYKXUFelD2Q0anqX", "seq": 8184, "text": "123123"}
                }]
            }]
        }

        var m = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726377219,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505725749360,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxYTgcFelD_Z9j5HO", "seq": 8185, "text": "asd asd asd asd"}
                }]
            }]
        }

        var j = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726377942,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505725769108,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxYUtlFelEAnB5wm1", "seq": 8186, "text": "123123"}
                }]
            }]
        }

        var l = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726378690,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505726230568,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxYw4KFelEcxsFtnv", "seq": 8187, "text": "asd"}
                }]
            }]
        }


        var o = {
            "object": "page",
            "entry": [{
                "id": "309677339443781",
                "time": 1505726380208,
                "messaging": [{
                    "sender": {"id": "1431065757000307"},
                    "recipient": {"id": "309677339443781"},
                    "timestamp": 1505726323364,
                    "message": {"mid": "mid.$cAAFDU3B52UdkxY2ipFelEib-mtcQ", "seq": 8189, "text": "12312"}
                }]
            }]
        }


        return Q(true);
    }
}