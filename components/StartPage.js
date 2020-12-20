import {Card,Spin,Image} from 'antd';
import React,{useState,useEffect} from "react";
import firebase from "../store/_config";


const StartPage=()=>{


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

    let imgSrc='../images/'+exercise+".gif";

    return(
      <>
          <div>
              <Card type="inner" title="운동 선택하기" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                  <div>
                      <h1 style={{Color:'red'}}>{exercise ? exercise:<Spin/>}</h1>
                        <Image src={imgSrc} alt='exerciseImg' style={{width:'20vh',height:"20vh"}}/>
                  </div>

              </Card>

          </div>
      </>

    );

};

export default StartPage;