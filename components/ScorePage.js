import {Card} from 'antd';
import React from "react";
import Score from "./Score";

const ScorePage=()=>{

    return(
        <>
            <div>
                <Card type="inner" title="운동점수는?" style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                    <Score/>
                </Card>

            </div>
        </>

    );

};

export default ScorePage;