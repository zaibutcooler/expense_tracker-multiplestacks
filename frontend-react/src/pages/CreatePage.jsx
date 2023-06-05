import React, { useState } from "react";

import AddDailyExpenseForm from "../components/AddDailyExpenseForm";
import AddMonthlyExpenseForm from "../components/AddMonthlyExpenseForm";
import AddIncomeForm from "../components/AddIncomeForm";
import AddExpenseForm from "../components/AddExpenseForm";

import ButtonGroup from "../mini-com/ButtonGroup";

const CreatePage = () => {
  const [activeForm, setActiveForm] = useState("daily");
  const incomeUrl = "http://localhost:5000/incomes/";
  const dailyUrl = "http://localhost:5000/daily/";
  const monthlyUrl = "http://localhost:5000/monthly/";
  const expenseUrl = "http://localhost:5000/expenses/";

  const changeViews = (buttonData) => {
    setActiveForm(buttonData);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 1:
        return <AddIncomeForm />;
      case 2:
        return <AddExpenseForm passUrl={dailyUrl} />;

      case 3:
        return <AddExpenseForm passUrl={monthlyUrl} />;

      case 4:
        return <AddExpenseForm passUrl={expenseUrl} />;
      default:
        return <AddIncomeForm />;
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="lg:w-84 mx-50 pt-4 ">
          <ButtonGroup selectedButton={changeViews} />
        </div>
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default CreatePage;
