import express = require('express');
import * as bodyParser from 'body-parser';
import Controller  from './src/interfaces/controller.interface';
class WebServer {
    public app: express.Application;
    public API_PORT: Number;
    constructor(controllers: Controller[], API_PORT: Number) {
        this.app = express();
        this.API_PORT = API_PORT;
        this.registerRoutes(controllers);
        this.initializeMiddlewares();
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
}
export default WebServer;