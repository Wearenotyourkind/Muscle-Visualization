import React from 'react'
import {Menu} from "antd";
import Link from "next/link";

const Footer=()=>{

    return(

        <div>
            <footer>
                <Menu style={{backgroundColor:'#00b300', position: 'fixed', bottom:'0',width:'100%',height: 'auto',zIndex: '1'}}>
                    <Menu.Item style={{fontSize:'100%'}}>
                        <Link href="https://github.com/Wearenotyourkind/HellinE"><a>@2020 SketchStorming </a></Link>
                    </Menu.Item>
                </Menu>
            </footer>
        </div>
    )
};

export default Footer;