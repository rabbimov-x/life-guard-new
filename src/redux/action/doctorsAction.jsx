import axios from "axios";
import { DOCTORS } from "../../tools/constants";
import { API_PATH  } from "../../tools/constants";
import { toast } from "react-toastify";

function UpdateState  (data) {
    return{
            type: DOCTORS,
            paload: data
            }
}

export const doctorsActoin = () => (dispatch) =>{
        axios.get( API_PATH + "users")
            .then((res)=>{
                console.log(res)
                dispatch(UpdateState({doctorsCard:res.data}))
                
            })

            .catch((error)=>{
                
                toast.error(error)

            })
}