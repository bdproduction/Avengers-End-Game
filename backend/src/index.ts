import mongoose from 'mongoose';

import { AvengersController } from './avengers/avengers.controller';
import { VillainsController } from './villains/villains.controller';
import WebServer from '../server';
const API_PORT = 3003;
const app = new WebServer(
  [
    new AvengersController(),
    new VillainsController(),
  ],
  API_PORT,
);

// this is our MongoDB database
const dbRoute = 'mongodb://localhost:27017/AvengersGame';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => { console.log('connected to the database'); });

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

