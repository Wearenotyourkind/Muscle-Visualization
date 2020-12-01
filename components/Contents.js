import React,{useCallback} from 'react';
import {Button, Card} from 'antd';
import StartPage from './StartPage';
import ExercisePage from "./ExercisePage";
import ScorePage from "./ScorePage";
import {useSelector,useDispatch} from "react-redux";
import {pageSet} from "../reducers";


const Contents=()=>{
    //pageToView가 바뀌면 페이지를 바꿈
    const page = useSelector((state)=>state.page);
    const dispatch = useDispatch();
    console.log(page);

    const onClickSecondPage =useCallback(()=>{
        dispatch(pageSet(2));
        console.log('page redux:'+page);
    },[]);
    const onClickThirdPage =useCallback(()=>{
        dispatch(pageSet(3));
        console.log('page redux:'+page);
    },[]);

    const onClickReset =useCallback(()=>{
        console.log('workout has been ended!');
        dispatch(pageSet(1));
        console.log('page redux:'+page);
    },[]);


    return(
      <>
          <Card title="헬린이 운동하자!!!" style={{margin:'1vh',top:'10vh',boxShadow: '3px 3px 3px 3px #cccccc'}}>
              <div>
                  {
                      page ===1 && <div>
                                <StartPage/>
                                <Button onClick={onClickSecondPage} style={{margin:'1vh'}}>다음으로</Button>
                            </div>
                  }
                  {
                      page ===2 && <div >
                          <ExercisePage/>
                          <Button onClick={onClickThirdPage} style={{margin:'1vh'}}>다음으로</Button>
                      </div>
                  }
                  {
                      page ===3 && <div >
                              <ScorePage/>
                              <Button type='primary' onClick={onClickReset} style={{margin:'1vh'}}>처음으로</Button>
                          </div>
                  }
              </div>

          </Card>
      </>
    );
};

export default Contents;