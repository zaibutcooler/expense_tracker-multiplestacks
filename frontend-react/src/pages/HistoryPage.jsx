import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [income, setIncome] = useState([]);
  const [daily, setDaily] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [expense, setExpense] = useState([]);

  const [totalIncome, setTotalIncome] = useState(0);

  const calTotalIncome = (looper) => {
    var total = null;
    for (item in looper) {
      total = total + item.amount;
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

        setTotalIncome(calTotalIncome(income));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Item</h1>

        {income.map((item) => (
          <div key={item._id}>
            {item.name}-{item.amount}
          </div>
        ))}
      </div>
      <h1>Total :{totalIncome}</h1>
      <hr />
      <div>
        <h1>Daily</h1>

        {daily.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
        <hr />
      </div>

      <div>
        <h1>Monthly</h1>

        {monthly.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
        <hr />
      </div>
      <div>
        <h1>Expense</h1>

        {expense.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default HistoryPage;
