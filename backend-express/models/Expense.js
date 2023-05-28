const mongoose = require("mongoose");
const expenseSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currencyType: { type: String },
});

module.exports = mongoose.model("Expense", expenseSchema);
