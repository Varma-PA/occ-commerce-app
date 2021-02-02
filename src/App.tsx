import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react'


function App() {
  const [products, setProducts] = useState([]);
  useEffect(function() {
    (async function getProducts() {
      await fetch("https://fakestoreapi.com/products?limit=10")
      .then(res => res.json()).then(res => setProducts(res));
    })()
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-wrap"> { products.map(product => <ProductCard  product={product}/>) } </div>
    </div>
  );
}

export default App;
