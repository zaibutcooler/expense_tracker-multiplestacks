import React, { useEffect, useState } from "react";
import OtherCard from "../mini-com/OtherCard";
import OtherEditCard from "../mini-com/OtherEditCard";

import axios from "axios";
import StatsCard from "./StatsCard";
import ExpenseFormCard from "../mini-com/ExpenseFormCard";

const AddDailyExpenseForm = () => {
  const [datas, setDatas] = useState([]);
  const [sortedDatas, setSortedDatas] = useState([]);
  const [toggleEdit, setToggleEdit] = useState([]);

  const url = "http://localhost:5000/expenses";

  const handleFormSubmit = (formData) => {
    axios
      .post(url, formData)
      .then((res) => {
        console.log("Expense created successfully");
        setDatas((prevDatas) => [...prevDatas, res.data]);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Request failed with status code",
            error.response.status
          );
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });
  };

  const handleFormDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("Expense Deleted successfully");
        setDatas((prevDatas) => prevDatas.filter((data) => data._id !== id));
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Request failed with status code",
            error.response.status
          );
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });
  };

  const handleEditOpen = (id) => {
    const updatedEdit = [...toggleEdit];
    updatedEdit[id] = true;
    setToggleEdit(updatedEdit);
  };

  const handleEditSave = (id) => {
    const updatedEdit = [...toggleEdit];
    updatedEdit[id] = false;
    setToggleEdit(updatedEdit);
  };

  const handleEditCancel = (id) => {
    const updatedEdit = [...toggleEdit];
    updatedEdit[id] = false;
    setToggleEdit(updatedEdit);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
        setToggleEdit(res.data.map(() => false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-between items-start min-h-screen bg-gray-100">
      <div className="max-w-md mx-4 mb-6 pt-4 mt-2 w-full">
        {/* Form content */}
        <ExpenseFormCard onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-col items-center py-6 mt-2 w-full">
        <div className="overflow-y-auto max-h-screen w-full">
          {datas.map((data, index) => (
            <div key={data._id} className="ml-4">
              {toggleEdit[index] ? (
                <OtherEditCard
                  id={data._id}
                  key={data._id}
                  name={data.name}
                  amount={data.amount}
                  currencyType={data.currencyType}
                  handleSave={() => handleEditSave(index)}
                  handleCancel={() => handleEditCancel(index)}
                />
              ) : (
                <OtherCard
                  id={data._id}
                  key={data._id}
                  name={data.name}
                  amount={data.amount}
                  currencyType={data.currencyType}
                  created={data.created}
                  handleEdit={() => handleEditOpen(index)}
                  handleDelete={() => handleFormDelete(data._id)}
                />
              )}
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
