import {Button, Card,Spin} from 'antd';
import React,{useState,useEffect} from "react";
import firebase from "../store/_config";
import {useDispatch, useSelector} from "react-redux";
import {pageSet} from "../reducers";


const StartPage=()=>{
    const dispatch =useDispatch();
    const pageToView = useSelector((state)=>state.page);

    const [exercise, setExercise]=useState('');


    useEffect(()=>{
        const exerciseRef=firebase.database().ref('try');
        exerciseRef.on('value',(snapshot)=>{
            const exerciseSnapshot=snapshot.val();
            const exercise =[];
            for (let index in exerciseSnapshot){
                exercise.push(exerciseSnapshot[index]);
            }
            setExercise(exercise[0]);


        });
    },[]);





    return(
      <>
          <div>
              <Card type="inner" title="운동 선택하기" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                  <p>헬린이 보드에서 운동을 선택해 주세요</p>
                  <div>
                      선택된 운동
                      <h1 style={{Color:'red'}}>{exercise ? exercise:<Spin/>}</h1>
                  </div>

              </Card>

          </div>
      </>

    );

};

export default StartPage;