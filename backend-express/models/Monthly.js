const mongoose = require("mongoose");
const monthlyExpenseSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currencyType: { type: String },
});

module.exports = mongoose.model("Monthly", monthlyExpenseSchema);
