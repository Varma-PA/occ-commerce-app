import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewCart } from '../../actions';
import CartProduct from '../CartProduct/CartProduct';

function CartCard() {
    let cartProds: any = useSelector(state => state);

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
                {cartProds.productReducer.map((prod: any) => <CartProduct product={prod} />)}
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
