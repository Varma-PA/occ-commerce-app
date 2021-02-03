import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/products-list";
import CartPage from "./pages/cart-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
