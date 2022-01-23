import React , {useEffect} from "react";
import { connect } from "react-redux";
import BiografyCard from "../../components/BiografyCard/BiografyCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar"
import { doctorsActoin } from "../../redux/action/doctorsAction";

import "./doctors.scss"

const Doctors  = (props) =>{
   useEffect(() => {
       props.doctorsActoin();
   }, [])
    return(
        <div className = "Doctors">
            <Navbar/>
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-2 aside-col-2">

                        <div className = ""></div>
                        <ul className = "nav flex-column aside-nav">
                            <li className = "nav-item ">
                                <span className = "nav-link">
                                    <div className = "letf-aside-icon">
                                        <img className = "aside-icon-img" src = "./assets/images/svg/human.svg"  alt="error"></img>
                                    </div>
                                </span>
                                <span className = "nav-link"> Baxodir</span>
                            </li>
                            <li className = "nav-item ">
                                <span className = "nav-link">
                                    <div className = "letf-aside-icon">
                                        <img className = "aside-icon-img" src = "./assets/images/svg/doctor.svg"  alt="error"></img>
                                    </div>
                                </span>
                                <span className = "nav-link">Your Doctors</span>
                            </li>
                            <li className = "nav-item " >
                                <span className = "nav-link" > 
                                    <div className = "letf-aside-icon">
                                        <img className = "aside-icon-img" src = "./assets/images/svg/vaccination.svg"  alt="error"></img>
                                    </div>
                                </span>
                                <span className = "nav-link" >Trat</span>
                            </li>
                            <li className = "nav-item ">
                                <span className = "nav-link">
                                    <div className = "letf-aside-icon">
                                        <img className = "aside-icon-img" src = "./assets/images/svg/ambulance.svg"  alt="error"></img>
                                    </div>
                                </span>
                                <span className = "nav-link">Ambulance</span>
                            </li>
                            
                        </ul>
                    </div>
                    <div className = "col-10">
                        <div className = "doctors-main container-fluid">
                            <div className = "row">
                                {console.log("doctor")  }
                                {
                                    
                                  props.card.map(function (value ,index){
                                      return(
                                          <div key = {index} className="col-3">
                                              <BiografyCard data = {value}></BiografyCard>
                                          </div>
                                          
                                      )

                                  })
                                  
                                }
                              
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
            
            <Footer/>

        </div>
    )
}

const StatetoProps =(state)=>{
    
    return{
       card: state.doctors.doctorsCard, 
   }

}


export default connect( StatetoProps, {doctorsActoin})( Doctors);    