import React from "react";
import StatsCard from "../components/StatsCard";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

const StatsPage = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button className="m-4" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="m-4" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default StatsPage;
