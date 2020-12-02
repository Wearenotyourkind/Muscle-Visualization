import {Card,Spin} from 'antd';
import React,{useRef,useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {exerciseSet} from "../reducers";


const ExercisePage=()=> {
    let preCount=useRef(parseInt(1));
    const exerciseStart = useSelector((state)=>state.exercise);
    const dispatch = useDispatch();

    const onStartExercise =useCallback(()=>{
        dispatch(exerciseSet(preCount.current+1));
        console.log('onStartExercise');
    },[]);

    setTimeout(onStartExercise,15000);
    return(
        <>
            <div>
                <Card type="inner" title="운동하자!!" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                    {
                        exerciseStart===1 ? <img src='../images/anigif.gif' alt='3 countdown' style={{width:'35vh'}}/> :<div><h1>10 Reps 종료!</h1> <h2>점수를 계산중입니다.<br/> 잠시만 기다려주세요</h2><Spin/></div>
                    }


                </Card>

            </div>
        </>

    );

};

export default ExercisePage;