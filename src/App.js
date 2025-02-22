import React from "react";
import { Container } from "react-bootstrap";
import CustomButton from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center p-4">
      <Header />
      <CustomButton text="Click me" />
    </Container>
  );
};

export default App;
