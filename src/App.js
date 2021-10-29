import "./App.css";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
function App() {
  return (
    <div className="app">
      <Wrapper>
        <Navbar />
        <Form />
      </Wrapper>
    </div>
  );
}

export default App;
