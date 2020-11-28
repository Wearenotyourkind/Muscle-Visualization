import {Menu} from 'antd';

const Navigation=()=>{
    return(
        <>
            <Menu mode='horizontal' style={{backgroundColor:'#00b300',height:'7vh',textAlign:'center'}}>
                <Menu.Item>
                        <a>바른자세<img src='../images/logo.png' style={{margin:'1vh',width:'5vh',height:'5vh'}} alt='logo'/>헬린이</a>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Navigation;