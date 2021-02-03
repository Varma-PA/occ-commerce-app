import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function getProducts() {
      await fetch("https://fakestoreapi.com/products?limit=10")
        .then((res) => res.json())
        .then((res) => setProducts(res));
    })();
  }, []);

  return (
    <div>
      <div className="d-flex align-content-stretch flex-wrap">
        {" "}
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}{" "}
      </div>
    </div>
  );
}

export default ProductList;
