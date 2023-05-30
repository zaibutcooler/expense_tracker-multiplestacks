import React, { useEffect, useState } from "react";
import OtherCard from "../components/OtherCard";
import axios from "axios";
import StatsCard from "./StatsCard";

const AddDailyExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyType, setCurrencyType] = useState("dollar");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/daily")
      .then((res) => setDatas(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div className="max-w-md mx-4 mb-6 mt-2">
        {/* Form content */}
        <h2 className="text-xl text-center font-semibold text-gray-800 mb-6">
          Add Your Daily Expenses
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
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
              <option value="MMK">MMK</option>
              <option value="EURO">EURO</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-500 text-white font-semibold py-2 rounded-md hover:bg-slate-600">
            Add
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center pl-20 mt-2 py-20 w-1/2 overflow-y-auto max-h-screen">
        {datas.map((data) => (
          <OtherCard
            key={data._id}
            name={data.name}
            amount={data.amount}
            currencyType={data.currencyType}
            created={data.created}
          />
        ))}
      </div>
      <div className="max-w-md mx-4 my-8">
        {/* Right component */}
        <StatsCard />
      </div>
    </div>
  );
};

export default AddDailyExpenseForm;
