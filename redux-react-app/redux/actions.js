//액션(Action) : 상태를 변경하는 이벤트

//increment,decrement 함수는 각각 액션객체를 반환하는 함수
//단순히 특정타입(type)을 가지는 객체를 반환한다.
//이 객체는 reduce에서 상태를 변경하기 위한 신호로 사용된다.
export const increment = () =>({
    type : 'INCREMENT' //안에 값은 고정된 값이 아니지만 대문자로만 적는것이 좋다.
})

export const decrement = () =>({
    type : 'DECREMENT'
})