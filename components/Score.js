import React,{useState,useEffect} from "react";
import firebase from "../store/_config";


const Score=()=>{
    const [exercise, setExercise]=useState(null);

    useEffect(()=>{
        const exerciseRef=firebase.database().ref('try');
        exerciseRef.on('value',(snapshot)=>{
            const exerciseSnapshot=snapshot.val();
            const exercise =[];
            for (let id in exerciseSnapshot){
                exercise.push(exerciseSnapshot[id]);
            }
            console.log(exercise);
            setExercise(exercise);


        });
    },[]);

    return(
        <>
            <div>
                {exercise ? exercise.map((exer)=>(<h1>{exer}</h1>)):''}
            </div>
        </>
    )
}


export default Score;