"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
const AttributesSchema = new Schema({
    Attack: Number,
    Health: Number,
    Defense: Number
});
const Attributes = mongoose.model('Attributes', AttributesSchema);
exports.default = Attributes;
//# sourceMappingURL=Attributes.model.js.map