import { ADD_TO_CART, VIEW_CART } from "../constants";

const productReducer = (state:any = [], action:any) => {
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state, 
                action.payload
            ]
        case VIEW_CART:
            return [
                ...state
            ]
        default:
            return state;
    }
}

export default productReducer;