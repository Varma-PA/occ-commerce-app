import { ADD_TO_CART, REMOVE_FROM_CART, VIEW_CART } from "../constants";

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
        case REMOVE_FROM_CART:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
        default:
            return state;
    }
}

export default productReducer;