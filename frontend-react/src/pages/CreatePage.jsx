import React, { useState } from "react";

import AddDailyExpenseForm from "../components/AddDailyExpenseForm";
import AddMonthlyExpenseForm from "../components/AddMonthlyExpenseForm";
import AddIncomeForm from "../components/AddIncomeForm";
import AddExpenseForm from "../components/AddExpenseForm";

import ButtonGroup from "../mini-com/ButtonGroup";

const CreatePage = () => {
  const [activeForm, setActiveForm] = useState("daily");
  const changeViews = (buttonData) => {
    setActiveForm(buttonData);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 1:
        return <AddIncomeForm />;
      case 2:
        return <AddDailyExpenseForm />;
      case 3:
        return <AddMonthlyExpenseForm />;
      case 4:
        return <AddExpenseForm />;
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
