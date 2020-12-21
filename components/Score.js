import React,{useState,useEffect} from "react";
import firebase from "../store/_config";
import { Spin } from 'antd';
import styled, { keyframes } from 'styled-components';

const Score=()=>{
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




    let pulse =keyframes`
        0% { transform: scale(1); }
        50% { 
            transform: scale(${exercise[1]*0.07}); 
            filter: drop-shadow(1vh 1vh 2vh rgba(${(exercise[1]/10)**(exercise[1]/30)}, ${(exercise[1]/20)**2}, ${exercise[1]**(exercise[1])}, 1))
            }
        100% { transform: scale(1); }
    `;

    let HeartStyle = styled.svg`
        fill: red;
        position: relative;
        top: 5px;
        width: 50px;
        margin: 10vh;
        animation: ${pulse} 1s ease infinite;
    `;


    return(
        <>
            <div>
                {exercise ?
                    <div style={{height: '50vh'}}>
                    <h1 style={{marginBottom:'10vh'}}>시작!!!</h1>
                    <HeartStyle viewBox="0 0 32 29.6">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </HeartStyle>
                        <h2 style={{marginTop:'5vh'}}>현재 당신의 <b style={{fontSize:'1.5rem'}}>{exercise[0]}</b>점수는 <b style={{fontSize:'1.5rem'}}>{exercise[1]}</b>점 입니다 !!</h2>
                </div> :<Spin/>}
            </div>
        </>
    )
};


export default Score;