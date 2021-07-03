import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import image1 from "./img/img_1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import image4 from "./img/img4_2.png";
import image5 from "./img/img5.png";

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
};

function Slider(){

    return(
        <Carousel autoplay >
            <div>
                <img alt="image1" src={image1} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="image2" src={image2} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="image3" src={image3} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="image4" src={image4} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="image5" src={image5} className="photo" style={contentStyle}></img>
            </div>
        </Carousel>
    );
}

export default Slider;


