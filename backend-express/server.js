const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(cors());

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

authRoute = require("./routes/authRoutes");
app.use("/auth", authRoute);

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
