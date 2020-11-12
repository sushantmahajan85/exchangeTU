// Including Packages!
var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  routes = require("./routes/routes");
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  { check, validationResult } = require("express-validator"),
  // apiroutes = require("");

// const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Including Routes!


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
//Connection To Database
mongoose.connect(
  "mongodb+srv://exchangeTU:LHK3SfOv6Bxbuv54@cluster0.zzzpu.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log("Connection to db successful");
    } else {
      console.log(error);
    }
  }
);

// //Including Model
// var Team = require("./models/team.js");
// var Recruit = require("./models/recruit.js");
app.use("/", routes);
// app.use("/api/recruit", apiroutes);

app.listen(5000, function() {
  console.log("Server Started!");
});
