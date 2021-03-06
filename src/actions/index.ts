import { ADD_TO_CART, REMOVE_FROM_CART, VIEW_CART } from "../constants";

export function addToCart(product:any){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(id:number){
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export function viewCart(){
    return {
        type: VIEW_CART
    }
}