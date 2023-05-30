import React, { useState } from "react";

const ButtonGroup = ({ selectedButton }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonData) => {
    setActiveButton(buttonData);
    selectedButton(buttonData);
  };

  return (
    <div className="flex">
      <button
        className={`px-8 py-2 rounded-l-full ${
          activeButton === 1 ? "bg-slate-400" : "bg-slate-300"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(1)}>
        My Incomes
      </button>
      <button
        className={`px-6 py-2 ${
          activeButton === 2 ? "bg-slate-400" : "bg-slate-300"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(2)}>
        Daily Expenses
      </button>
      <button
        className={`px-6 py-2 ${
          activeButton === 3 ? "bg-slate-400" : "bg-slate-300"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(3)}>
        Monthly Expenses
      </button>
      <button
        className={`px-6 py-2 rounded-r-full ${
          activeButton === 4 ? "bg-slate-400" : "bg-slate-300"
        } text-sm text-black font-semibold w-auto`}
        onClick={() => handleButtonClick(4)}>
        Normal Expenses
      </button>
    </div>
  );
};

export default ButtonGroup;
