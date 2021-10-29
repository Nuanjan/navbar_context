import { createContext, useState } from "react";
import React from "react";
import MyContext from "./MyContext";

function Wrapper(props) {
  const [user, setUser] = useState("");
  return (
    <MyContext.Provider value={[user, setUser]}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Wrapper;
