const initialState ={
    exercise:{
        exerciseSelected: {},
    },
    seconds:{
        preTime:3,
        time: 10
    },
    score:{

    }
};

const pushupSelect =(data)=>{
    return{
        type: 'PUSHUP_SELECTED',
        data,
    }
};

const benchPressSelect =(data)=>{
    return{
        type: 'BENCHPRESS_SELECTED',
        data,
    }
};

const sidelateralraiseSelect =(data)=>{
    return{
        type: 'SIDELATERALRAISE_SELECTED',
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
        case 'PUSHUP_SELECTED':
            return{
                ...state,
                exercise:{
                    ...state.exercise,
                    exerciseSelected: action.data
                }
            };
        case 'BENCHPRESS_SELECTED':
            return{
                ...state,
                exercise: {
                    ...state.exercise,
                    exerciseSelected:action.data
                }
            };
        case 'SIDELATERALRAISE_SELECTED':
            return {
                ...state,
                exercise: {
                    ...state.exercise,
                    exerciseSelected: action.data
                }
            };
        default:
            return state;
    }
};