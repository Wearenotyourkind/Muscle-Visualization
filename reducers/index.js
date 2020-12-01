import {HYDRATE} from "next-redux-wrapper";

export const initialState ={
    seconds:{
        preTime:3,
        time: 10
    },
    page:1,
};


//액션 크리에이터 => data에 바꾸고 싶은 것을 넣으면 알아서 액션이 생성된다.
//비동기 액션 크리에이터도 리덕스 사가에서 나옴
const PAGE_SET ='PAGE_SET';
const COUNTDOWN ='COUNTDOWN';
const PRECOUNTDOWN = 'PRECOUNTDOWN';
export const pageSet =(page)=> ({
        type: PAGE_SET,
        page,
});

export const countdown=(time)=>({
    type:COUNTDOWN,
    time
});

export const preCountdown=(preTime)=>({
    type:COUNTDOWN,
    preTime
});




//리듀서== 함수
const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case HYDRATE:
            console.log('HYDRATE',action);
            return{
                ...state,
                ...action.payload,
            };
        case PAGE_SET:
            return{
                ...state,
                page: action.page,
            };
        case COUNTDOWN:
            return{
                ...state,
                seconds:{
                    ...state,
                    time:action.time,
                }
            };
        case PRECOUNTDOWN:
            return{
                ...state,
                seconds: {
                    ...state,
                    preTime:action.preTime
                }
            };

        default: return state
    }
};

export default rootReducer;