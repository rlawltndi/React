//리듀서(reducer) : 액션엥 따라 상태를 변경하는 순수함수(거의 직접 만듦)
//리듀서의 기본 구조
//현재상태(state)와 엑션(action)두가지 인자를 가지는 함수이다.
//1. 현재상태(state)
//리듀서가 관리하는 현재상태
//리듀서가 처음 호출될 때 초기상태가 설정된다.
//2. 액션(action)
//상태를 변경할 이벤트, 액션 객체는 최소한 type속성을 가지며, 상태를 어떻게
//변경할지 리듀서에게 알려준다.


//초기값 지정하기 위해 만든 객체
const initalState = { count: 0 }

//state가 undefined일 경우 , initalState를 기본값으로 사용해라
const counterReducer = (state = initalState, action) => {
    //액션의 타입에 따라 상태를 변경하기 위한 switch문 사용
    switch (action.type) {
        //'INCREMENT'액션일 경우 count 값을 1증가시긴 새로운 상태 반환
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        //'DECREMENT'액션일 경우 count 값을 1감소시킨 새로운 상태 변환
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        //일치하는 액션이 없을 경우, 현재 상태를 그대로 반환한
        default:
            return state;
    }
}
export default counterReducer