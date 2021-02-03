import React from 'react'
import './CartProduct.css'

function CartProduct( {product} : any) {
    return (
        <tr>
            <td><img className="cartProdImg" src={product.image} /> </td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td className="text-right">{product.price} €</td>
            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
        </tr>
    )
}

export default CartProduct;
