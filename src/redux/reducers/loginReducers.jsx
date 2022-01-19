
import { LOGIN } from "../../tools/constants";

const initialState = {
    isLoading : false,
    title: "aaaa",
    minu: []
}

export const LoginReducer = (state = initialState , action)=>{ 

    if(action.type === LOGIN){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}