const mongoose = require("mongoose");
const incomeSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  source: { type: String },
  passive: { type: Boolean },
  totalMonthlyHour: { type: Number },
  currencyType: { type: String },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Income", incomeSchema);
