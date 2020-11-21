const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      //required: true,
    },
    titleImg: {
      type: String,
      // required: true,
      // default: "corona.jpg",
    },
    createdAt: {
      type: Number,
      default: Date.now(),
    },
    mrp: {
      type: Number,
    },
    dealPrice: {
      type: Number,
    },
    dealName: {
      type: String,
      //required: true,
    },
    hostelName: {
      type: String,
    },
    duration: {
      type: String,
    },
    description: {
      type: String,
    },
    saveLater: Number,
    owner: {
      type: String,
    },
    buyNow: {
      type: Number,
    },
    corouselImgs: [String],
    tags: Array,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      //required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
//virtual populate
// dealSchema.virtual("reviews", {
//   ref: "Review",
//   foreignField: "deal",
//   localField: "_id",
// });

// dealSchema.post("save", async function () {
//   // const shorter = shortid.generate();
//   // this.short = shorter;

//   this.long = `127.0.0.1:5000/deal/${this._id}/postedBy/${this.user}`;
//   this.save();
// });

const Deal = mongoose.model("Deal", dealSchema);
module.exports = Deal;
