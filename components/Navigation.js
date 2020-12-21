import {Menu} from 'antd';

const Navigation=()=>{
    return(
        <div>
            <Menu mode='horizontal' style={{backgroundColor: '#ff471a', position: 'fixed', top:'0',width:'100%',height: 'auto',zIndex: '1'}}>
                <Menu.Item style={{display:'flex',alignSelf: 'flex-end', alignItems: 'center',justifyContent: 'center'}}>
                    <h1 style={{fontSize:'1.3rem'}}>Muscle</h1>
                    <img src='../images/logo.png' style={{textColor:'black',margin:'1vh',width:'5vh',height:'5vh'}} alt='logo'/>
                    <h1 style={{fontSize:'1.3rem'}}>Art</h1>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navigation;