import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar_Test from "./components/Header/navbar_test";

const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <h1>Welcome to handicraft zone</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
};

export default App;
