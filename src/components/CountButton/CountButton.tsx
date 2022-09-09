import React from "react";
import s from "./CountButton.module.css";

type buttonPropsType = {
  title: string;
  onClickHandler: () => void;
  disabled: boolean;
};

export const CountButton = (props: buttonPropsType) => {
  return (
    <div>
      <button
        className={s.btn}
        onClick={props.onClickHandler}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
};
