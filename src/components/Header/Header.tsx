import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Shopping Cart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <button className="btn btn-outline-success" type="submit" onClick={}>
          Cart
        </button> */}

        <Link to="/cart">
          <button className="btn btn-outline-success">Cart</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
