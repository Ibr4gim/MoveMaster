import React from "react";
import { Container } from "react-bootstrap";

import CustomButton from "./components/Button";
import Header from "./components/Header";
import ChessGame from "./components/ChessGame";
import InfoCards from "./components/infoCards";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container className="d-flex flex-column align-items-center p-4 ">
        <Header />
        <CustomButton text="Click me" />
        <ChessGame />
        <InfoCards />
      </Container>
    </div>
  );
};

export default App;
