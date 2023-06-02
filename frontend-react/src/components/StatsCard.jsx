import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StatsCard = () => {
  const [income, setIncome] = useState([]);
  const [daily, setDaily] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [expense, setExpense] = useState([]);
  const [loading, setLoading] = useState(true);

  const calculate = (looper) => {
    let total = 0;
    for (const item of looper) {
      total += item.amount;
    }
    return total;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = [
          axios.get("http://localhost:5000/incomes"),
          axios.get("http://localhost:5000/daily"),
          axios.get("http://localhost:5000/monthly"),
          axios.get("http://localhost:5000/expenses"),
        ];
        const [
          incomeResponse,
          dailyResponse,
          monthlyResponse,
          expenseResponse,
        ] = await Promise.all(requests);

        setIncome(incomeResponse.data);
        setDaily(dailyResponse.data);
        setMonthly(monthlyResponse.data);
        setExpense(expenseResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  let totalIncome = calculate(income);
  // Calculate total daily expenses
  const totalDailyExpenses = calculate(daily) * 25;

  // Calculate total monthly expenses
  const totalMonthlyExpenses = calculate(monthly);

  // Calculate total normal expenses
  const totalNormalExpenses = calculate(expense);

  // Calculate money left
  const moneyLeft =
    totalIncome -
    (totalDailyExpenses + totalMonthlyExpenses + totalNormalExpenses);

  // Calculate money wasted
  const moneyWasted =
    totalDailyExpenses + totalMonthlyExpenses + totalNormalExpenses;

  return (
    <div className="bg-white py-8 px-10 ml-12 mr-10 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Total Result</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-600">Total Income</h3>
          <p className="text-xl font-semibold">{totalIncome} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Daily Expenses</h3>
          <p className="text-xl font-semibold">{totalDailyExpenses} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Monthly Expenses</h3>
          <p className="text-xl font-semibold">{totalMonthlyExpenses} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Normal Expenses</h3>
          <p className="text-xl font-semibold">{totalNormalExpenses} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Left</h3>
          <p className="text-xl font-semibold">{moneyLeft} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Spent</h3>
          <p className="text-xl font-semibold">{moneyWasted} $</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 1</h3>
          <p className="text-xl font-semibold">-</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 2</h3>
          <p className="text-xl font-semibold">-</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 3</h3>
          <p className="text-xl font-semibold">-</p>
        </div>
      </div>
      <br />
      <div className="flex justify-right">
        <Link
          to="/stats"
          className=" my-6 px-2 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-300">
          Show full stats
        </Link>
        <Link
          to="/history"
          className=" my-6 mx-2 px-2 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-300">
          Show history
        </Link>
      </div>
    </div>
  );
};

export default StatsCard;
