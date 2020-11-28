import {Button, Card, Select} from 'antd';
import React from "react";
const { Option } = Select;


const StartPage=()=>{
    return(
      <>
          <div>
              <Card type="inner" title="운동 선택하기" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                  <Select style={{width:'20vh',margin:'1vh'}}>
                      <Option value="pushup">Push Up</Option>
                      <Option value="benchpress">Bench Press</Option>
                      <Option value="sidelateralraise">Side Lateral Raise</Option>
                  </Select>

                  <Button type='primary'>시작하기</Button>
              </Card>

          </div>
      </>

    );

};

export default StartPage;