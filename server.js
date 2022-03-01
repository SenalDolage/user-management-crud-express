const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const connectDB = require('./server/database/connection');

connectDB();

/* log requests using morgan*/
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

/* defining routes separately */
app.use('/', require('./server/routes/router'));

app.set("view engine", "ejs");

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
