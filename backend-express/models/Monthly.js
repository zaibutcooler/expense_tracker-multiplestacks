const mongoose = require("mongoose");
const monthlyExpenseSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currencyType: { type: String },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Monthly", monthlyExpenseSchema);
