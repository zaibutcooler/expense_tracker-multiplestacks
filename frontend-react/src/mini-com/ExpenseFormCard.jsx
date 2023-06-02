import React from "react";

const ExpenseFormCard = ({ onSubmit }) => {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [currencyType, setCurrencyType] = React.useState("dollar");

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
    onSubmit({ name, amount, currencyType });
    setName("");
    setAmount("");
  };

  return (
    <div className="max-w-sm mx-4 mb-6 mt-2 bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl text-center font-semibold text-gray-800 mb-6">
        Add Your Expenses
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
            <option value="dollar">USD</option>
            <option value="dollar">JPY</option>
            <option value="dollar">MMK</option>
            <option value="dollar">EURO</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-500 text-white font-semibold py-2 rounded-md hover:bg-slate-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseFormCard;
