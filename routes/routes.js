var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
const catchAsync = require("../utils/catchAsync");
var router = express.Router();
var Deal = require("../models/dealModel");
var User = require("../models/userModel");
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
router.get(
  "/",
  catchAsync(async function (req, res) {
    const deals = await Deal.find()
      .sort([["createdAt", -1]])
      .limit(100);
    console.log(deals);
    res.render("index", { deals });
  })
);
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
router.get(
  "/deal/:id/postedBy/:userid",
  catchAsync(async function (req, res) {
    const user = await User.findById(req.params.userid);
    const deal = await Deal.findById(req.params.id);
    // console.log(deal);
    console.log(user);
    res.render("single", { deal, user });
  })
);
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
