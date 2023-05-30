import React, { useState } from "react";

const AddIncomeForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [passive, setPassive] = useState(true);
  const [totalMonthlyHour, setTotalMonthlyHour] = useState(0);
  const [currencyType, setCurrencyType] = useState("dollar");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handlePassiveChange = (event) => {
    setPassive(event.target.value === "passive");
  };

  const handleTotalMonthlyHourChange = (event) => {
    setTotalMonthlyHour(event.target.value);
  };

  const handleCurrencyTypeChange = (event) => {
    setCurrencyType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form logic goes here
  };

  return (
    <div className="flex justify-left mx-20 items-start min-h-screen bg-gray-100">
      <div className="max-w-md mx-4 my-8 ">
        <h2 className="text-xl text-center font-semibold text-gray-800 mb-6">
          Add Your Incomes
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-800 font-semibold mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="currencyType"
              className="block text-gray-800 font-semibold mb-2">
              Currency Type
            </label>
            <select
              id="currencyType"
              value={currencyType}
              onChange={handleCurrencyTypeChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
              <option value="dollar">Dollar</option>
              {/* Add other currency options here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="source"
              className="block text-gray-800 font-semibold mb-2">
              Source
            </label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={handleSourceChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="passive"
                  checked={passive}
                  onChange={handlePassiveChange}
                  className="mr-2"
                />
                Passive Income
              </label>
              <label>
                <input
                  type="radio"
                  value="active"
                  checked={!passive}
                  onChange={handlePassiveChange}
                  className="mr-2"
                />
                Active Income
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalMonthlyHour"
              className="block text-gray-800 font-semibold mb-2">
              Total Monthly Hour
            </label>
            <input
              type="number"
              id="totalMonthlyHour"
              value={totalMonthlyHour}
              onChange={handleTotalMonthlyHourChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-500 text-white font-semibold py-2 rounded-md hover:bg-slate-600">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeForm;
