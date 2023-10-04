import React from "react";
import work1 from '../assets/work2.png';
import work2 from '../assets/work3.png';
import work3 from '../assets/work4.png';
import './work.styles.css';

const Works = () => {
    return(
        <div className="work-component">
            <h1>Our Work</h1>
            <div className="wrok-container">
                <img src={work1} alt="" />
                <div className="image-text">
                    <div className="text-content">
                        <h3>General Inspection and safety</h3>
                        <p>audi a5</p>
                    </div>
                </div>
            </div>
            <div className="wrok-container">
                <img src={work2} alt="" />
                <div className="image-text">
                    <div className="text-content">
                        <h3>General Inspection and safety</h3>
                        <p>audi a5</p>
                    </div>
                </div>
            </div>
            <div className="wrok-container">
                <img src={work3} alt="" />
                <div className="image-text">
                    <div className="text-content">
                        <h3>General Inspection and safety</h3>
                        <p>audi a5</p>
                    </div>
                </div>
            </div>
            <div className="dash-container">
                <div className="dash1"></div>
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
            </div>
        </div>
    )
}

export default Works;