import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./components/Screens/ProductScreen";
import CartScreen from "./components/Screens/CartScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
import ProfileScreen from "./components/Screens/ProfileScreen";
import ShippingScreen from "./components/Screens/ShippingScreen";
import PaymentScreen from "./components/Screens/PaymentScreen";
import PlaceOrderScreen from "./components/Screens/PlaceOrderScreen";
import OrderScreen from "./components/Screens/OrderScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
