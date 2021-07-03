import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import image1 from "./img/img_1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import image4 from "./img/img4.png";


const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Slider(){

    return(
        <Carousel autoplay>
            <div>
                <img alt="Firtst_img" src={image1} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="Firtst_img" src={image2} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="Firtst_img" src={image3} className="photo" style={contentStyle}></img>
            </div>
            <div>
                <img alt="Firtst_img" src={image4} className="photo" style={contentStyle}></img>
            </div>
        </Carousel>
    );
}

export default Slider;


