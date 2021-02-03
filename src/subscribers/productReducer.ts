import { ADD_TO_CART } from "../constants";

const productReducer = (state:any = [], action:any) => {
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state, 
                action.payload
            ]
        default:
            return state;
    }
}

export default productReducer;