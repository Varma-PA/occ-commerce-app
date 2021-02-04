import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, viewCart } from '../../actions';
import './CartCard.css'

function CartCard() {
    let cartProds: any = useSelector(state => state);
    const dispatch = useDispatch();
    function removeProduct(id: number){ 
        console.log(id);
        
        dispatch(removeFromCart(id));
    }
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Category</th>
                    <th scope="col" className="text-center">Description</th>
                    <th scope="col" className="text-right">Price</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {cartProds.productReducer.map((prod: any, index: any) => (
                    <tr>
                        <td><img className="cartProdImg" src={prod.image} /> </td>
                        <td>{prod.title}</td>
                        <td>{prod.category}</td>
                        <td>{prod.description}</td>
                        <td className="text-right">{prod.price} €</td>
                        <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => removeProduct(index)} ><i className="fa fa-trash"></i> </button> </td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td className="text-right">{cartProds.productReducer.map((prod: any) => prod.price).reduce(function (a: number, b: number) {
                        return a + b;
                    })} €</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartCard;
