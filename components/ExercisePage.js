import {Card} from 'antd';
import React from "react";
import {useSelector} from "react-redux";



const ExercisePage=()=>{
    const preTime = useSelector((state)=>state.seconds.preTime);
    const countDown=(sec)=>{

    };

    return(
        <>
            <div>
                <Card type="inner" title="운동하자!!" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>

                    <div>
                        <h1>
                            준비 시간!
                        </h1>
                        <h1>
                            {preTime}
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Go 10 Reps!!!
                        </h1>
                        <h1>
                            Reps to GO!!
                        </h1>
                    </div>
                </Card>

            </div>
        </>

    );

};

export default ExercisePage;