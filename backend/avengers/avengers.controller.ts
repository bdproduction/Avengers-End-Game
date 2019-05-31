import * as express from 'express';
import Controller from '../src/interfaces/controller.interface';
import AvengersService from './avengers.service';

export class AvengersController implements Controller {
  public path = '/Avengers';
  public router = express.Router();
  public avengersService = AvengersService.prototype;
  constructor() {
    this.avengersService = new AvengersService();
    this.intializeRoutes();
  }
  async getAllAvengers(req: any, res: any, next: any) {
    let avengers: any;
     try {
        avengers = await this.avengersService.getAllAvengers();
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(avengers);
  }
  async getAvengerByID(req: any, res: any, next: any) {
    let avengers: any;
     try {
        avengers = await this.avengersService.getAvengerByID(req.params.id);
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(avengers);
  }
  async deleteAvengerByID(req: any, res: any, next: any) {
    let avengers: any;
     try {
        avengers = await this.avengersService.deleteAvengerByID(req.params.id);
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(avengers);
  }
  public intializeRoutes() {
    this.router.get(this.path, this.getAllAvengers.bind(this));
    this.router.get(this.path + '/:id', this.getAvengerByID.bind(this));
    this.router.get(this.path + '/delete/:id', this.deleteAvengerByID.bind(this));
  }
}