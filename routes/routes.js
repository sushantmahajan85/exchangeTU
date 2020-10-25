var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var router = express.Router();
var Team = require("../models/team");
const recruit = require("../models/recruit");
const { check, validationResult } = require("express-validator");

router.get("/attendance", function (req, res) {
  res.render("attendance");
});

router.post("/submit", function (req, res) {
  //some code here
  var payas = req.body.payas;
  var sushant = req.body.sushant;
  var saksham = req.body.saksham;
  var newAtd = { Payas: payas, Sushant: sushant, Saksham: saksham };
  Team.create(newAtd, function (err, newattendance) {
    if (err) {
      console.log(err);
    } else {
      console.log(newattendance);
      res.redirect("/");
    }
  });
  //after adding to db
  // req.flash("success","Attendance Submitted!");
});

router.get("/recruit", function (req, res) {
  res.render("recruit", { errors: "" });
});
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
router.get("/attendance", function (req, res) {
  res.render("attendance");
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

module.exports = router;
