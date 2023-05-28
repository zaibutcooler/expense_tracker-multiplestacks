const mongoose = require("mongoose");
const dailyExpenseSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currencyType: { type: String },
});

module.exports = mongoose.model("Daily", dailyExpenseSchema);
