const fs = require("fs");
const LikedDeal = require("../models/likedDealModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllLikedDeals = factory.getAll(LikedDeal);

exports.setDealUserIds = async (req, res, next) => {
  if (!req.body.deal) {
    req.body.deal = req.params.dealId;
  }
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

exports.getLikedDeals = factory.getOne(LikedDeal);

exports.createLikedDeals = factory.createOne(LikedDeal);

exports.updateLikedDeals = factory.updateOne(LikedDeal);

exports.deleteLikedDeals = factory.deleteOne(LikedDeal);
