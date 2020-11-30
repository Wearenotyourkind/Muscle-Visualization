import {Button, Card, Checkbox} from 'antd';
import React from "react";


const StartPage=()=>{
    return(
      <>
          <div>
              <Card type="inner" title="운동 선택하기" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>

                  <Checkbox>Push Up</Checkbox>
                  <Checkbox >Bench Press</Checkbox>
                  <Checkbox >Side Lateral Raise</Checkbox>

                  <Button type='primary'>시작하기</Button>
              </Card>

          </div>
      </>

    );

};

export default StartPage;