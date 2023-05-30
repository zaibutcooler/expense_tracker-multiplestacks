import React from "react";

const OtherCard = ({ name, amount, currencyType, created }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 w-full">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">Amount: {amount}</p>
      <p className="text-gray-700">Currency Type: {currencyType}</p>
      <p className="text-gray-700">Created: {created}</p>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 mr-2 bg-slate-600 text-white rounded-md hover:bg-slate-300">
          Edit
        </button>
        <button className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default OtherCard;
