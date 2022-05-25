import "../../styles/ui/Counter.scss";
import React from "react";
import MinusIcon from "../icon/MinusIcon";
import PlusIcon from "../icon/PlusIcon";

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

const Counter = ({
  value,
  setValue,
  minValue = 0,
  maxValue = Number.MAX_VALUE,
  className,
}) => {
  const incrementHandler = () => {
    setValue((prevValue) => clamp(minValue, prevValue + 1, maxValue));
  };

  const decrementHandler = () => {
    setValue((prevValue) => clamp(minValue, prevValue - 1, maxValue));
  };

  return (
    <div className={`counter ${className}`}>
      <button className="counter__buttons" onClick={decrementHandler}>
        <MinusIcon />
      </button>
      <div className="counter__value">{value}</div>
      <button className="counter__buttons" onClick={incrementHandler}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default Counter;
