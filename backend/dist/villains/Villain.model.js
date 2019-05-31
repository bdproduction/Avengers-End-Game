"use strict";
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
const mongoose = __importStar(require("mongoose"));
const Attributes_model_1 = __importDefault(require("../attributes/Attributes.model"));
const Schema = mongoose.Schema;
const VillainSchema = new Schema({
    Name: String,
    Attributes: Attributes_model_1.default.schema,
    Description: String,
    Portrait: String
});
const Villain = mongoose.model('Villain', VillainSchema);
exports.default = Villain;
//# sourceMappingURL=Villain.model.js.map