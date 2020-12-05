import {Card,Spin} from 'antd';
import React,{useRef,useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {exerciseSet} from "../reducers";
import useSound from '../hooks/useSound';


const ExercisePage=()=> {
    const BGM ='../audio/count.m4a';
    useSound(BGM, 1, 2000);
    let preCount=useRef(parseInt(1));
    const exerciseStart = useSelector((state)=>{
        return state.exercise;
    });


    const dispatch = useDispatch();

    const onStartExercise =useCallback(()=>{
        dispatch(exerciseSet(preCount.current+1));
        console.log('onStartExercise');
    },[]);

    setTimeout(onStartExercise,35000);
    return(
        <>
            <div>
                <Card type="inner" title="운동하자!!" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                    {
                        exerciseStart===1 ? <img src='../images/ExerciseCountDown.gif' alt='3 countdown' style={{width:'35vh'}}/> :<div><h1>10 Reps 종료!</h1> <h2>점수를 계산 완료!<br/> 다음 버튼을 눌러주세요</h2><Spin/></div>
                    }
                </Card>

            </div>
        </>

    );

};

export default ExercisePage;