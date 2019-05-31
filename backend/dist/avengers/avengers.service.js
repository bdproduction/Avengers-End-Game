"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avenger_model_1 = __importDefault(require("./Avenger.model"));
const Attributes_model_1 = __importDefault(require("../attributes/Attributes.model"));
class AvengersService {
    constructor() {
        this.avenger = Avenger_model_1.default;
    }
    getAllAvengers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.avengers = yield this.avenger.find().populate({ path: 'Attributes', model: Attributes_model_1.default }).exec();
            }
            catch (ex) {
                console.log(ex.message);
            }
            return this.avengers;
        });
    }
    getAvengerByID(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.avengers = yield this.avenger.findById(ID).populate({ path: 'Attributes', model: Attributes_model_1.default }).exec();
            }
            catch (ex) {
                console.log(ex.message);
            }
            return this.avengers;
        });
    }
    deleteAvengerByID(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.avengers = yield this.avenger.findByIdAndDelete(ID).exec();
            }
            catch (ex) {
                console.log(ex.message);
            }
            return true;
        });
    }
}
exports.default = AvengersService;
//# sourceMappingURL=avengers.service.js.map