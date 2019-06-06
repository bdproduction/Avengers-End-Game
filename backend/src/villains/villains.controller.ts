import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import VillainService from './villains.service';
import { VillainsData } from '../../data/Villains.json';
import NewVillainDto from './dto/newVillain.dto';

export class VillainsController implements Controller {
  public path = '/Villains';
  public router = express.Router();
  public villainsService = VillainService.prototype;
  constructor() {
    this.villainsService = new VillainService();
    this.intializeRoutes();
  }
  async getAllVillains(req: any, res: any, next: any) {
    let villains: any;
     try {
      villains = await this.villainsService.getAllVillains();
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(villains);
  }
  async getVillainByID(req: any, res: any, next: any) {
    let villains: any;
     try {
      villains = await this.villainsService.getVillainByID(req.params.id);
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(villains);
  }
  async deleteVillainByID(req: any, res: any, next: any) {
    let villains: any;
     try {
      villains = await this.villainsService.deleteVillainByID(req.params.id);
     }
     catch (ex) {
        console.log(ex.message);
     }
    res.json(villains);
  }
  async createVillainsData() {
    try {
      await Promise.all(VillainsData.map(async (element: any) => {
        await this.villainsService.createVillain(new NewVillainDto(element));
      }));
   }
   catch (ex) {
      console.log(ex.message);
   }
  }
  async deleteVillains() {
    try {
      await this.villainsService.deleteAllVillains();
    } catch (err) {
      console.log(err.message);
    }
  }
  public intializeRoutes() {
    this.router.get(this.path, this.getAllVillains.bind(this));
    this.router.get(this.path + '/:id', this.getVillainByID.bind(this));
    this.router.get(this.path + '/delete/:id', this.deleteVillainByID.bind(this));
    this.router.get('/VillainsData', this.createVillainsData.bind(this));
    this.router.get('/DeleteVillains', this.deleteVillains.bind(this));
  }
}