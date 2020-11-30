import {Card} from 'antd';
import React from "react";

const ExercisePage=()=>{

    return(
        <>
            <div>
                <Card type="inner" title="운동하자!!" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>

                    <div>
                        <h1>
                            준비
                        </h1>
                        <h1>
                            {}
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