import React, { useEffect, useState } from "react";
import axios from "axios";

const StatsCard = () => {
  const [income, setIncome] = useState([]);
  const [daily, setDaily] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [expense, setExpense] = useState([]);
  const [loadin, setLoading] = useState(true);

  const [totalIncome, setTotalIncome] = useState(10);

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
    setTotalIncome(calculate(income));
  }, []);

  return (
    <div className="bg-white py-8 px-10 ml-12 mr-10 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Total Result</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-600">Total Income</h3>
          <p className="text-xl font-semibold">{totalIncome}</p>
        </div>
        <div>
          <h3 className="text-gray-600">Daily Expenses</h3>
          <p className="text-xl font-semibold">$500</p>
        </div>
        <div>
          <h3 className="text-gray-600">Monthly Expenses</h3>
          <p className="text-xl font-semibold">$300</p>
        </div>
        <div>
          <h3 className="text-gray-600">Normal Expenses</h3>
          <p className="text-xl font-semibold">$200</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Left</h3>
          <p className="text-xl font-semibold">$200</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Wasted</h3>
          <p className="text-xl font-semibold">$100</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 1</h3>
          <p className="text-xl font-semibold">$50</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 2</h3>
          <p className="text-xl font-semibold">$75</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 3</h3>
          <p className="text-xl font-semibold">$125</p>
        </div>
      </div>
      <button className="my-6 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-300">
        Delete
      </button>
    </div>
  );
};

export default StatsCard;
