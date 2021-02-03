import React from 'react'
import "./ProductCard.css"

function ProductCard({ product }: any) {

    return (
        <div className="card shadow">
            <img className="card-img rounded img-fluid m-4" src={product.image} />
            <div className="card-img-overlay d-flex justify-content-end">
                <a href="#" className="card-link text-danger like">
                    <i className="fa fa-heart"></i>
                </a>
            </div>
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p className="card-text d-flex flex-wrap">
                    {product.description}
                </p>
                <div className="mt-auto">
                    <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4">{product.price}</h5></div>
                        <a href="#" className="btn btn-danger mt-3"><i className="fa fa-shopping-cart"></i> Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;
