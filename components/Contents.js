import React,{useCallback} from 'react';
import {Button, Card, Image} from 'antd';
import StartPage from './StartPage';
import {useSelector,useDispatch} from "react-redux";
import {pageSet} from "../reducers";
import Score from "./Score";


const Contents=()=>{
    //pageToView가 바뀌면 페이지를 바꿈
    const page = useSelector((state)=>state.page);
    const dispatch = useDispatch();
    console.log(page);

    const onClickFirstPage =useCallback(()=>{
        dispatch(pageSet(1));
        console.log('page redux:'+page);
    },[]);

    const onClickSecondPage =useCallback(()=>{
        dispatch(pageSet(2));
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
                      page ===0 &&<>
                          <div style={{textAlign:'center'}}>
                              <img src='../images/logo.png' alt='Logo' style={{width:'30vh',height:'30vh'}}/>
                              <h1 style={{fontSize:'30px',textAlign:'center'}}>바른자세 헬린이</h1>
                              <h4>올바른 자세로 득근하세요</h4>
                              <Button type="primary" onClick={onClickFirstPage}>시작하기</Button>
                          </div>
                      </>
                  }
                  {
                      page ===1 && <div>
                                <StartPage/>
                                <Button onClick={onClickSecondPage} style={{margin:'1vh'}}>다음으로</Button>
                            </div>
                  }
                  {
                      page ===2 && <div style={{textAlign:'center'}}>
                              <Score/>
                              <Button type='primary' onClick={onClickReset} style={{margin:'1vh'}}>그만하기</Button>
                          </div>
                  }
              </div>

          </Card>
      </>
    );
};

export default Contents;