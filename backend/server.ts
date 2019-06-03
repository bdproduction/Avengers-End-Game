import express = require('express');
import * as bodyParser from 'body-parser';

import Controller from './src/interfaces/controller.interface';
class WebServer {
    public app: express.Application;
    public API_PORT: Number;
    constructor(controllers: Controller[], API_PORT: Number) {
        this.app = express();
        this.API_PORT = API_PORT;
        this.initializeCrossDomain();
        this.initializeMiddlewares();
        this.registerRoutes(controllers);
        // launch our backend into a port
        this.app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
    }

    private registerRoutes(controllers: any) {
        // append /api for our http requests
        controllers.forEach((controller: any) => {
            this.app.use('/api', controller.router);
        });
    }
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
    private initializeCrossDomain() {
        this.app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Access-Control-Allow-Origin, Access-Control-Allow-Methods');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // Pass to next layer of middleware
            next();
        });
    }
}
export default WebServer;