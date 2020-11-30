import React from 'react';
import {Button, Card} from 'antd';
import StartPage from './StartPage';
import ExercisePage from "./ExercisePage";
import ScorePage from "./ScorePage";

const Contents=()=>{
    return(
      <>
          <Card title="헬린이 운동하자!!!" style={{margin:'1vh',top:'10vh',boxShadow: '3px 3px 3px 3px #cccccc'}}>

              <StartPage/>
              <ExercisePage/>
              <ScorePage/>

          </Card>
      </>
    );
};

export default Contents;