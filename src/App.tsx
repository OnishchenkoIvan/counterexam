import React, { useState } from "react";
import "./App.css";
import { CountDisplay } from "./components/CountDisplay/CountDisplay";
import { CountButton } from "./components/CountButton/CountButton";

function App() {
  const [count, useCount] = useState<number>(0);

  const Increment = () => {
    useCount(count + 1);
  };

  const Reset = () => {
    useCount(0);
  };

  return (
    <div className="App">
      <div className={"container"}>
        <CountDisplay count={count} />
        <div className={"buttons"}>
          <CountButton
            title={"Inc"}
            onClickHandler={Increment}
            disabled={count === 5}
          />
          <CountButton
            title={"Reset"}
            onClickHandler={Reset}
            disabled={count === 0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
