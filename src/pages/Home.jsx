import React from "react";
 import Header from "../components/Header/header";
import Main from "../components/Main/main";
import Footer from "../components/Footer/Footer";
import CenterMode from "../components/AdminLAyout";
import { connect } from "react-redux";
const Home =(props)=>{
    return(
        <div className = "container-fluid"   > 
          <div className = "row d-block">            
            
            <Header/>
            <Main data = {props.biografyCard}/>
            <Footer/>
            
          </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
  return{
    biografyCard: state.doctors.doctorsCard,
  }
} 

export default connect( mapStateToProps , null )( Home);