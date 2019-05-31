"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const villains_service_1 = __importDefault(require("./villains.service"));
class VillainsController {
    constructor() {
        this.path = '/Villains';
        this.router = express.Router();
        this.villainsService = villains_service_1.default.prototype;
        this.villainsService = new villains_service_1.default();
        this.intializeRoutes();
    }
    getAllVillains(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let villains;
            try {
                villains = yield this.villainsService.getAllVillains();
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(villains);
        });
    }
    getVillainByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let villains;
            try {
                villains = yield this.villainsService.getVillainByID(req.params.id);
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(villains);
        });
    }
    deleteVillainByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let villains;
            try {
                villains = yield this.villainsService.deleteVillainByID(req.params.id);
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(villains);
        });
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllVillains.bind(this));
        this.router.get(this.path + '/:id', this.getVillainByID.bind(this));
        this.router.get(this.path + '/delete/:id', this.deleteVillainByID.bind(this));
    }
}
exports.VillainsController = VillainsController;
//# sourceMappingURL=villains.controller.js.map