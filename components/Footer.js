import React from 'react'
import {Menu} from "antd";

const Footer=()=>{

    return(

        <div>
            <footer>
                <Menu style={{backgroundColor:' #ff471a', position: 'fixed', bottom:'0',width:'100%',height: 'auto',zIndex: '1'}}>
                    <Menu.Item style={{fontSize:'2rem'}}>
                        미디어아트개론 이현수 20192724
                    </Menu.Item>
                </Menu>
            </footer>
        </div>
    )
};

export default Footer;