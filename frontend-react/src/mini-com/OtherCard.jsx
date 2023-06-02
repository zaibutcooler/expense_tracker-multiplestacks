import React from "react";
import axios from "axios";

const OtherCard = ({
  id,
  name,
  amount,
  currencyType,
  created,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-4 w-full">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">Amount: {amount}</p>
      <p className="text-gray-700">Currency Type: {currencyType}</p>
      <p className="text-gray-700">Created: {created}</p>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 mr-2 bg-slate-600 text-white rounded-md hover:bg-slate-300"
          onClick={handleEdit}>
          Edit
        </button>
        <button
          className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-300 mr-4"
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default OtherCard;
