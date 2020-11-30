import React from 'react';
import {Button, Card} from 'antd';
import StartPage from './StartPage';
import ExercisePage from "./ExercisePage";
import ScorePage from "./ScorePage";

const Contents=()=>{
    return(
      <>
          <Card title="헬린이 운동하자!!!" >
              <ScorePage dataRoute={'index'}/>



              <div style={{textAlign:'center',display:'flex'}}>
                  <Button type='primary' style={{margin:'2vh'}}>뒤로</Button>
                  <Button type='primary' style={{margin:'2vh'}}>처음으로</Button>
              </div>
          </Card>
      </>
    );
};

export default Contents;