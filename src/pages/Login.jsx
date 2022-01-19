import React from "react";
import {AvForm, AvField} from 'availity-reactstrap-validation'
import "bootstrap/dist/css/bootstrap.min.css"
import {connect} from 'react-redux'
import {login} from '../redux/action/loginAction'
const Login  =(props)=>{
    return(
        <div className = "container">
            <div className = "row vh-100 d-flex justify-content-center align-items-center">
                <div className = "col-4">
                    <div className = "card">
                       <div className = "card-body">
                       <AvForm  onSubmit = {props.login}>
                            
                                <AvField type ="text" name = "phoneName"    label="Your paswvord"     required errorMessage = "To'ldirish majburiy"></AvField>

                               <AvField type =  "password" name = "password"    label="Your paswvord"     required errorMessage = "To'ldirish majburiy"></AvField>

                                <button type = "submit" className = "btn btn-success btn-block"  >Sigin in</button>
                       </AvForm>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    )
}


export default connect( null  , {login}  )(Login);