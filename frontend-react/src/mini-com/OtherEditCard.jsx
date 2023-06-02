import React, { useState } from "react";

const OtherEditCard = ({
  name,
  amount,
  currencyType,
  handleSave,
  handleCancel,
}) => {
  const [nameX, setNameX] = useState(name);
  const [amountX, setAmountX] = useState(amount);
  const [currencyTypeX, setCurrencyTypeX] = useState(currencyType);

  return (
    <div className="bg-white rounded-lg p-8 mb-4 w-full">
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={nameX}
            onChange={(e) => {
              e.target.value;
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-medium">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amountX}
            onChange={(e) => {
              e.target.value;
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <select
            id="currencyType"
            value={currencyTypeX}
            onChange={(e) => {
              e.target.value;
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <option value="dollar">USD</option>
            <option value="dollar">JPY</option>
            <option value="dollar">MMK</option>
            <option value="dollar">EURO</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 mr-2 bg-slate-600 text-white rounded-md hover:bg-slate-300"
            onClick={handleSave}>
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-300"
            onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtherEditCard;
