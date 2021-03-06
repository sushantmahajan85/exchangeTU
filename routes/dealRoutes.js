const fs = require("fs");
const express = require("express");

const dealController = require("./../controllers/dealController");
const authController = require("./../controllers/authController");

const likedDealRouter = require("./likedDealRoutes");

const router = express.Router({ mergeParams: true });
router.use("/:dealId/likedDeals", likedDealRouter);
router.route("/trending").get(dealController.getTrending);
router
  .route("/")
  .get(dealController.getAllDeals)
  .post(
    authController.protect,
    dealController.uploadDealImages,
    dealController.resizeDealImages,
    dealController.setDealUserIds,
    dealController.createDeal
  );

router
  .route("/:id")
  .get(dealController.getDeal)
  .patch(
    // authController.protect,
    // dealController.setDealUserIds,
    //  authController.restrictTo("admin"),
    // dealController.uploadDealImages,
    // dealController.resizeDealImages,
    dealController.updateDeal
  )
  .delete(
    // authController.protect,
    // authController.restrictTo("user"),
    dealController.deleteDeal
  );

module.exports = router;
