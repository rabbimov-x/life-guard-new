import React from "react";

import "./servicesInfo.scss"

function ServicesInfo(props) {
    return (
        <div className="ServicesInfo">
            
                    <div className="services-content">
                    <h2 className = "h2">Experience Design</h2>
                    <p>A digital platform’s strategy, design, and development must all promote one goal: creating a valuable, memorable experience for the user. We create experiences that connect deeply with your target audience’s needs, and inspire not just affection, but action.</p>
            
                </div>
                    <div class="col-md-8">
                        <div class="tab-list">
                            <ul class="list-unstyled">
                                <li class="">
                                    <a class="d-flex align-items-center text-decoration-none" href="/">
                                        <h1 className = "icon-arrow">&#8594;</h1> 
                                        <p>Digital Strategy</p> 
                                    </a>
                                    <div className ="after"></div>
                                </li>
                                <li class="">
                                    <a class="d-flex align-items-center text-decoration-none" href="/">
                                        <h1 className = "icon-arrow">&#8594;</h1> 
                                        <p>Digital Strategy</p> 
                                    </a>
                                    <div className ="after"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
        </div>
    )
}
export default ServicesInfo;