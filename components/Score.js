import React,{useState,useEffect} from "react";
import firebase from "../store/_config";
import { Spin } from 'antd';


const Score=()=>{
    const [exercise, setExercise]=useState(null);

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

    return(
        <>
            <div>
                {exercise ? exercise.map((exer)=>(<h1>{exer}</h1>)):<Spin/>}
            </div>
        </>
    )
}


export default Score;