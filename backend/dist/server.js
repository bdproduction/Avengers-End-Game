"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
class WebServer {
    constructor(controllers, API_PORT) {
        this.app = express();
        this.API_PORT = API_PORT;
        this.registerRoutes(controllers);
        this.initializeMiddlewares();
        // launch our backend into a port
        this.app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
    }
    registerRoutes(controllers) {
        // append /api for our http requests
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
}
exports.default = WebServer;
//# sourceMappingURL=server.js.map