import React from "react";
import "./ProductCard.css";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../actions";

function ProductCard({ product }: any) {
  const dispatch = useDispatch();
  function clickMeTest() {
    console.log("Clicked hEre => ", product);
    dispatch(addToCart(product));
  }

  return (
    <div className="card shadow">
      <div>
        <img className="card-img rounded img-fluid m-4" src={product.image} />
        <span style={{ position: "absolute", top: "2rem", right: "3rem" }}>
          <a href="#" className="card-link text-danger like">
            <i className="fa fa-heart"></i>
          </a>
        </span>
      </div>

      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
        <p className="card-text d-flex flex-wrap">{product.description}</p>
        <div className="mt-auto">
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">{product.price}</h5>
            </div>
            <button className="btn btn-danger mt-3" onClick={clickMeTest}>
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
