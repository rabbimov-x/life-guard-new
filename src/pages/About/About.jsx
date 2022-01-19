import React, { Component } from "react";
import  Navbar  from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import ServicesInfo from "../../components/ServicesInfo/ServicesInfo"

import "./about.scss"
const About = ()=>{
  
    
    return (
      <div className = "About ">
        <Navbar/>
        <div className = "AboutMain container-fluid">
            <div className = "row">
                <div className = "col-12">
                                
                    <div className = "AboutTitle">
                        <div className = "min-all">
                            <div className ="content">
                                
                                    <div className = "left">
                                        <h1 className = "page-titile">About</h1>
                                        <div className ="red-bar"></div>
                                        <p className = "title-text">Heatlcare brands, builds, and promotes, offering end-to-end solutions, agility in execution, and depth of specialization.</p>
                                    </div>
                                    
                                    <div class="right-image-wrapper">
                                        <div className = "top-left-big">
                                        <div class="top-left-grey-hoop"></div>
                                        </div>
                                        <div class="blue-circle"></div>
                                        <div class="grey-hoop"></div>
                                        <div class="red-hoop"></div>
                                        <div className = 'image-titile'>
                                        <div className = 'image-titile2'>
                                                <img  src = "./assets/images/png/services_banner_main.jpg" className = "in-img"  />
                                            </div>
                                        </div>
                                    </div>
                                
                            
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row">
                    <div className = "col-6 about-col-6 "> 
                        <div className = "ImageServices">
                            <img src ="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/virus_3d_render_blue_02_other/1800x1200_virus_3d_render_blue_02_other.jpg?resize=*:470px"></img>
                        </div>
                    </div>
                    <div className = "col-6 about-col-6">
                        <ServicesInfo></ServicesInfo>
                    </div>
                    <div className = "col-6 about-col-6">
                        <ServicesInfo></ServicesInfo>
                    </div>
                    <div className = "col-6  about-col-6"> 
                        <div className = "ImageServices">
                            <img src ="https://healthcaresuccess.com/wp-content/uploads/halcyon-rehab-website.jpg"></img>
                        </div>
                    </div>
                    <div className = "col-6 "> 
                        <div className = "ImageServices">
                            <img src ="https://healthcaresuccess.com/wp-content/uploads/stock-photo1.jpg"></img>
                        </div>
                    </div>
                    
                    <div className = "col-6 about-col-6">
                        <ServicesInfo></ServicesInfo>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </div>

    );
  
}
export default About;