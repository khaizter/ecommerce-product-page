import "../../styles/ui/Counter.scss";
import React from "react";

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

const Counter = ({
  value,
  setValue,
  minValue = 0,
  maxValue = Number.MAX_VALUE,
}) => {
  const incrementHandler = () => {
    setValue((prevValue) => clamp(minValue, prevValue + 1, maxValue));
  };

  const decrementHandler = () => {
    setValue((prevValue) => clamp(minValue, prevValue - 1, maxValue));
  };

  return (
    <div className="counter">
      <button className="counter__buttons" onClick={decrementHandler}>
        <img src="./images/icon-minus.svg" alt="" />
      </button>
      <div className="counter__value">{value}</div>
      <button className="counter__buttons" onClick={incrementHandler}>
        <img src="./images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
};

export default Counter;
