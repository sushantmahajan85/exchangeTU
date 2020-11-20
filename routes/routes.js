var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var router = express.Router();
// var Team = require("../models/team");
// const recruit = require("../models/recruit");
const { check, validationResult } = require("express-validator");

router.post(
  "/recsubmit",
  [
    check("data[phone]", "Must be a length 0f 10").isLength({
      min: 10,
      max: 10,
    }),
  ],
  function (req, res) {
    var errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.render("recruit", { errors: errors.mapped() });
    } else {
      console.log(req.body.data);
      recruit.create(req.body.data, function (err, newdetails) {
        if (err) {
          console.log(err);
          res.redirect("/recruit");
        } else {
          res.redirect("/");
        }
      });
    }
  }
);

router.get("/edit", function (req, res) {
  Team.find({}, function (err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("edit", { attendance: allAttendance });
    }
  });
});

router.get("/view", function (req, res) {
  Team.find({}, function (err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("view", { attendance: allAttendance });
    }
  });
});

router.put("/:id", async function (req, res) {
  console.log(req.params.id);
  const updated = await Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    function (err, updatedatt) {
      if (!err) {
        res.redirect("/edit");
      } else {
        console.log("error");
      }
    }
  );
  console.log(updated);
});
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/about", function (req, res) {
  res.render("about");
});
router.get("/checkout", function (req, res) {
  res.render("checkout");
});
router.get("/contact", function (req, res) {
  res.render("contact");
});
router.get("/help", function (req, res) {
  res.render("help");
});
router.get("/product", function (req, res) {
  res.render("product");
});
router.get("/product2", function (req, res) {
  res.render("product2");
});
router.get("/single", function (req, res) {
  res.render("single");
});
router.get("/single2", function (req, res) {
  res.render("single2");
});
router.get("/TFF", function (req, res) {
  res.render("TFF");
});
router.get("/newDeal", function (req, res) {
  res.render("newDeal");
});
router.get("/wishlist", function (req, res) {
  res.render("wishlist");
});
router.get("/login", function (req, res) {
  res.render("login");
});
router.get("/signup", function (req, res) {
  res.render("signup");
});

module.exports = router;
