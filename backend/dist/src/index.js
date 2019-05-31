"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const avengers_controller_1 = require("../avengers/avengers.controller");
const villains_controller_1 = require("../villains/villains.controller");
const server_1 = __importDefault(require("../server"));
const API_PORT = 3003;
const app = new server_1.default([
    new avengers_controller_1.AvengersController(),
    new villains_controller_1.VillainsController(),
], API_PORT);
// this is our MongoDB database
const dbRoute = 'mongodb://localhost:27017/AvengersGame';
// connects our back end code with the database
mongoose_1.default.connect(dbRoute, { useNewUrlParser: true });
const db = mongoose_1.default.connection;
db.once('open', () => { console.log('connected to the database'); });
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//# sourceMappingURL=index.js.map