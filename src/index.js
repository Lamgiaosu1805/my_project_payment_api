const express = require('express');
const morgan = require('morgan');
const db = require('./config/db');
const route = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

//use middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//connect to DB
db.connect();

//run routes
route(app);

app.listen(port, () => {
  console.log(`my app listening on port ${port}`)
});