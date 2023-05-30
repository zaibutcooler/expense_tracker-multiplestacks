import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Yesterday's Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-600">Total Income</h3>
          <p className="text-xl font-semibold">$1000</p>
        </div>
        <div>
          <h3 className="text-gray-600">Daily Expenses</h3>
          <p className="text-xl font-semibold">$500</p>
        </div>
        <div>
          <h3 className="text-gray-600">Monthly Expenses</h3>
          <p className="text-xl font-semibold">$300</p>
        </div>
        <div>
          <h3 className="text-gray-600">Normal Expenses</h3>
          <p className="text-xl font-semibold">$200</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Left</h3>
          <p className="text-xl font-semibold">$200</p>
        </div>
        <div>
          <h3 className="text-gray-600">Money Wasted</h3>
          <p className="text-xl font-semibold">$100</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 1</h3>
          <p className="text-xl font-semibold">$50</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 2</h3>
          <p className="text-xl font-semibold">$75</p>
        </div>
        <div>
          <h3 className="text-gray-600">Other 3</h3>
          <p className="text-xl font-semibold">$125</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600">
        Show Stats
      </button>
    </div>
  );
};

export default StatsCard;
