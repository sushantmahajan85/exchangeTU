var express = require("express"),
  dotenv = require("dotenv"),
  app = express(),
  mongoose = require("mongoose"),
  cookieParser = require("cookie-parser"),
  compression = require("compression"),
  routes = require("./routes/routes");
(userRoute = require("./routes/userRoutes")),
  (dealRoute = require("./routes/dealRoutes")),
  (likedDealRoute = require("./routes/likedDealRoutes")),
  (methodOverride = require("method-override")),
  (bodyParser = require("body-parser")),
  ({ check, validationResult } = require("express-validator")),
  // apiroutes = require("");

  // const app = express();
  app.use(express.json());
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

app.use(cookieParser());

app.use(compression());

dotenv.config({ path: "./config.env" });

// Including Model
// var Team = require("./models/team.js");
// var Recruit = require("./models/recruit.js");
app.use("/", routes);
app.use("/api/v1/deals", dealRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/likedDeal", likedDealRoute);
// app.use("/api/recruit", apiroutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Listening on port", port);
});
