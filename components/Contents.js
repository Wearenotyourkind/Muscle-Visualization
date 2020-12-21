import React, {useCallback, useEffect, useState} from 'react';
import {Button, Card, Image} from 'antd';
import StartPage from './StartPage';
import {useSelector,useDispatch} from "react-redux";
import {pageSet} from "../reducers";
import Score from "./Score";
import styled, {keyframes} from "styled-components";
import firebase from "../store/_config";


const Contents=()=>{
    const [exercise, setExercise]=useState(2);

    useEffect(()=>{
        const exerciseRef=firebase.database().ref('try');
        exerciseRef.on('value',(snapshot)=>{
            const exerciseSnapshot=snapshot.val();
            const exercise =[];
            for (let index in exerciseSnapshot){
                exercise.push(exerciseSnapshot[index]);
            }
            setExercise(exercise);
        });
    },[]);

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

    let pulse =keyframes`
        0% { transform: scale(1); }
        50% { 
            transform: scale(1.2); 
            filter: drop-shadow(1vh 1vh 2vh rgba(0,0,204, 50))
            }
        100% { transform: scale(1); }
    `;

    let HeartStyle = styled.svg`
        fill: red;
        position: relative;
        top: 5px;
        width: 50px;
        margin: 8vh;
        animation: ${pulse} 1s ease infinite;
    `;


    return(
      <>
          <Card title="운동 시작!" style={{margin:'1vh',top:'10vh',boxShadow: '3px 3px 3px 3px #cccccc'}}>
              <div>
                  {
                      page ===0 &&<>
                          <div style={{textAlign:'center'}}>
                              <HeartStyle viewBox="0 0 32 29.6">
                                  <div style={{zIndex:'1'}}>{exercise[1]}</div>
                                  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                              </HeartStyle>
                              <h4 style={{fontSize:'1.5rem'}}>하트 크기로 운동 자세의 점수를 확인하세요</h4>
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
                              <Button type='primary' onClick={onClickReset} style={{marginTop:'7vh'}}>그만하기</Button>
                          </div>
                  }
              </div>

          </Card>
      </>
    );
};

export default Contents;