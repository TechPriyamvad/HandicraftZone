import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Screens/HomeScreen";
import { BrowserRouter as Router,Route } from "react-router-dom";
import ProductScreen from "./components/Screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
