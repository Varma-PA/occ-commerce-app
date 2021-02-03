import React from "react";
import CartCard from "../../components/CartCard/CartCard";

function CartPage() {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <CartCard />
          </div>
        </div>
        <div className="col mb-2">
          <div className="row">
            <div className="col-sm-12  col-md-6">
              <button className="btn btn-block btn-light">Continue Shopping</button>
            </div>
            <div className="col-sm-12 col-md-6 text-right">
              <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
