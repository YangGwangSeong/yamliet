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
    <div className="Slider_wrap">
        <Menu>
            <Menu.Item><Link to="/">홈</Link></Menu.Item>
            <Menu.Item><Link to="/Deck">소개</Link></Menu.Item>
        </Menu>
    </div>
    )
}

export default Title;