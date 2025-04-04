require('dotenv').config({ path: './db/.env' });  

import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

const app = express();
app.use(cors());
app.use(json());

const dbURI = process.env.MONGODB_URI;

console.log("Mongo URI:", process.env.MONGO_URI);
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/', (request, response) => {
    response.json({ message: "The server is up!!!" });
});

export default app;
