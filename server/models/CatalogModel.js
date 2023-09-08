const mongoose = require("mongoose");

const CatalogSchema = new mongoose.Schema({
  bean: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  priceUnit: { type: Number, required: true },
});

const CatalogModel = mongoose.model("catalog", CatalogSchema);

module.exports = CatalogModel;