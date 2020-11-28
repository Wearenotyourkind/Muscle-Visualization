import React from 'react';
import { Card } from 'antd';
import StartPage from './StartPage';

const Contents=()=>{
    return(
      <>
          <Card title="헬린이 운동하자!!!" style={{height:'50vh'}}>
              <StartPage/>
          </Card>
      </>
    );
};

export default Contents;