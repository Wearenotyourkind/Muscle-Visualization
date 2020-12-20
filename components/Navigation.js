import {Menu} from 'antd';

const Navigation=()=>{
    return(
        <div>
            <Menu mode='horizontal' style={{backgroundColor:'#00b300', position: 'fixed', top:'0',width:'100%',height: 'auto',zIndex: '1',textAlign:'center'}}>
                <Menu.Item>
                        <a>Muscle<img src='../images/logo.png' style={{textColor:'black',margin:'1vh',width:'5vh',height:'5vh'}} alt='logo'/>Visualization</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navigation;