"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SupervillainSchema = new Schema({
    Name: String,
    Attributes: {
        type: Schema.Types.ObjectId,
        ref: 'Attributes'
    },
    Description: String,
    Portrait: String
});
const Supervillain = mongoose_1.default.model('Supervillain', SupervillainSchema);
exports.default = Supervillain;
//# sourceMappingURL=Supervillain.js.map