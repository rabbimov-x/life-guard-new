import axios, { Axios } from "axios";
import { API_PATH, TOKIN_NAME } from "../../tools/constants";
import { toast } from "react-toastify";
import { LOGIN } from "../../tools/constants";

export const UpdateState = (data) => {
  return{
    type: LOGIN,
    payload: data ,
  }
}

export const login = ( event , errors , values) => (dispatch) => {

  axios.get( API_PATH + "users" , values)
   .then((res)=>{

    // console.log(res);

    dispatch(UpdateState({minu:res.data }))
    


     
   })
     .catch((error)=>{
       toast.error(error.response.data.message);
     });

  
}