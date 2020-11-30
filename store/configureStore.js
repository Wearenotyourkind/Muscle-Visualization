const initialState ={
    seconds:{
        preTime:3,
        time: 10
    },
    page:{

    }
};

const pushupSelect =(data)=>{
    return{
        type: 'PUSHUP_SELECTED',
        data,
    }
};
const timeDecrease = ()=>{
    return{
        type: 'TIMEDECREASE',
    }
};


const rootReducer=(state=initialState, action)=>{
    switch(action.type){

            };
        default:
            return state;
    }
};