import React, { useEffect, useState } from "react";
import OtherCard from "../mini-com/OtherCard";
import OtherEditCard from "../mini-com/OtherEditCard";

import axios from "axios";
import StatsCard from "./StatsCard";
import ExpenseFormCard from "../mini-com/ExpenseFormCard";

const AddDailyExpenseForm = ({ passUrl }) => {
  const [datas, setDatas] = useState([]);
  const [toggleEdit, setToggleEdit] = useState([]);

  const url = passUrl;

  // Function to sort the data based on "created" property
  const sortDataByCreated = (data) => {
    return data.sort((a, b) => new Date(b.created) - new Date(a.created));
  };

  // Fetch expenses data and sort it by "created" property in descending order
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const sortedData = sortDataByCreated(res.data);
        setDatas(sortedData);
        setToggleEdit(sortedData.map(() => false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  // Form submit handler
  const handleFormSubmit = (formData) => {
    axios
      .post(url, formData)
      .then((res) => {
        console.log("Expense created successfully");
        const updatedData = sortDataByCreated([...datas, res.data]);
        setDatas(updatedData);
      })
      .catch((error) => {
        // Handle error
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

  // Delete expense handler
  const handleFormDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log("Expense deleted successfully");
        const updatedData = datas.filter((data) => data._id !== id);
        setDatas(updatedData);
      })
      .catch((error) => {
        // Handle error
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

  // Edit expense handler
  const handleEditOpen = (index) => {
    const updatedToggleEdit = [...toggleEdit];
    updatedToggleEdit[index] = true;
    setToggleEdit(updatedToggleEdit);
  };

  const handleEditSave = (index, updatedData) => {
    const expenseId = datas[index]._id;
    axios
      .patch(`${url}/${expenseId}`, updatedData)
      .then((res) => {
        console.log("Expense updated successfully");
        const updatedDatas = [...datas];
        updatedDatas[index] = res.data;
        setDatas(updatedDatas);
        handleEditCancel(index);
      })
      .catch((error) => {
        // Handle error
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

  const handleEditCancel = (index) => {
    const updatedToggleEdit = [...toggleEdit];
    updatedToggleEdit[index] = false;
    setToggleEdit(updatedToggleEdit);
  };

  return (
    <div className="flex justify-between items-start min-h-screen bg-gray-100">
      <div className="max-w-md mx-4 mb-6 pt-4 mt-2 w-full">
        {/* Expense form content */}
        <ExpenseFormCard onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-col items-center py-6 mt-2 w-full">
        <div className="overflow-y-auto max-h-screen w-full">
          {datas.map((data, index) => (
            <div key={data._id} className="ml-4">
              {toggleEdit[index] ? (
                // Edit card
                <OtherEditCard
                  id={data._id}
                  key={data._id}
                  name={data.name}
                  amount={data.amount}
                  currencyType={data.currencyType}
                  handleSave={(updatedData) =>
                    handleEditSave(index, updatedData)
                  }
                  handleCancel={() => handleEditCancel(index)}
                  url={url}
                />
              ) : (
                // Normal card
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
        {/* Stats card component */}
        <div style={{ margin: "0 20px" }}>
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

export default AddDailyExpenseForm;
