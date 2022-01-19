import { combineReducers } from "redux";
import { LoginReducer } from "../reducers/loginReducers"
import { DoctorsRuducers } from "./doctorsReducers";

export const  rootReducer = combineReducers({
   login :  LoginReducer,
   doctors: DoctorsRuducers,
  });