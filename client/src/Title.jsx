import React from "react";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import './App.css';

function Title(){

    const { SubMenu } = Menu;

    return(
        // <div className="title text-center">
        //     <ul>
        //         <li>
        //             <Link to="/">홈</Link>
        //         </li>
        //         <li>
        //             <Link to="/Deck">소개</Link>
        //         </li>
        //     </ul>
        // </div>
    <div className="Slider_wrap Title_Wrap">
        <Menu>
            <Menu.Item><Link to="/">Slide</Link></Menu.Item>
            <Menu.Item><Link to="/Deck">Deck</Link></Menu.Item>
        </Menu>
    </div>
    )
}

export default Title;