import React, { useState } from "react";

const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyType, setCurrencyType] = useState("dollar");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
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
          Add Your Large Expenses
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
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
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
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
              <option value="dollar">Dollar</option>
              {/* Add other currency options here */}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-600">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
