import React from "react";
import s from "./CountDisplay.module.css";

type countDisplay = {
  count: number;
};

export const CountDisplay = (props: countDisplay) => {
  return (
    <div className={props.count === 5 ? s.stop : ""}>
      <div className={s.countDisplay}>
        <div>{props.count}</div>
      </div>
    </div>
  );
};
