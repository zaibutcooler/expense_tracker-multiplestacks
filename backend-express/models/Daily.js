const mongoose = require("mongoose");
const dailyExpenseSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currencyType: { type: String },
  created: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Daily", dailyExpenseSchema);
