const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/expense_tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

dailyRoute = require("./routes/dailyRoutes");
app.use("/daily", dailyRoute);

expenseRoute = require("./routes/expenseRoutes");
app.use("/expenses", expenseRoute);

incomeRoute = require("./routes/incomeRoutes");
app.use("/incomes", incomeRoute);

monthlyRoute = require("./routes/monthlyRoutes");
app.use("/monthly", monthlyRoute);

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
