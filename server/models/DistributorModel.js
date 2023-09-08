const mongoose = require("mongoose");

const DistributorSchema = new mongoose.Schema({
  distributorName: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  stateRegion: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

const DistributorModel = mongoose.model("distributors", DistributorSchema);

module.exports = DistributorModel;