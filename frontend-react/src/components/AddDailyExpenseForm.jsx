import React, { useEffect, useState } from "react";
import OtherCard from "../mini-com/OtherCard";
import axios from "axios";
import StatsCard from "./StatsCard";
import DailyFormCard from "../mini-com/DailyFormCard";

const AddDailyExpenseForm = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/daily")
      .then((res) => setDatas(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFormSubmit = (formData) => {
    // Submit form logic goes here
  };

  return (
    <div className="flex justify-between items-start min-h-screen bg-gray-100">
      <div className="max-w-md mx-4 mb-6 pt-4 mt-2 w-full">
        {/* Form content */}
        <DailyFormCard onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-col items-center py-6 mt-2 w-full">
        <div className="overflow-y-auto max-h-screen w-full">
          {datas.map((data) => (
            <div className="ml-4">
              <OtherCard
                key={data._id}
                name={data.name}
                amount={data.amount}
                currencyType={data.currencyType}
                created={data.created}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 pr-8 pl-4 ml-auto w-full">
        {/* Right component */}
        <div style={{ margin: "0 20px" }}>
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

export default AddDailyExpenseForm;
