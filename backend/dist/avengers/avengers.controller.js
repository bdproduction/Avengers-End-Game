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
const avengers_service_1 = __importDefault(require("./avengers.service"));
class AvengersController {
    constructor() {
        this.path = '/Avengers';
        this.router = express.Router();
        this.avengersService = avengers_service_1.default.prototype;
        this.avengersService = new avengers_service_1.default();
        this.intializeRoutes();
    }
    getAllAvengers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let avengers;
            try {
                avengers = yield this.avengersService.getAllAvengers();
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(avengers);
        });
    }
    getAvengerByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let avengers;
            try {
                avengers = yield this.avengersService.getAvengerByID(req.params.id);
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(avengers);
        });
    }
    deleteAvengerByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let avengers;
            try {
                avengers = yield this.avengersService.deleteAvengerByID(req.params.id);
            }
            catch (ex) {
                console.log(ex.message);
            }
            res.json(avengers);
        });
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllAvengers.bind(this));
        this.router.get(this.path + '/:id', this.getAvengerByID.bind(this));
        this.router.get(this.path + '/delete/:id', this.deleteAvengerByID.bind(this));
    }
}
exports.AvengersController = AvengersController;
//# sourceMappingURL=avengers.controller.js.map