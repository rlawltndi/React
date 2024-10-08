//import React, { useState } from 'react';
import './App.css';
//Redux와 React를 연결하는데 필요한 Provider,useDispatch,useSelector를 import
import Provider from 'react-redux'
//Redux 스토어를 import
import store from './redux/store';
//액션 생성 함수를 import
//아래 함수들은 상태를 변경하는 액션을 dispatch하기위해 사용한다.
import { increment, decrement } from './redux/actions'
import { addtodo, removetodo } from './todo/actions'

import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login, logout } from './login/actions';
import { addToCart,removeFromCart } from './cart/actions';

// function Counter(){
//    //useSelector : Redux에서 store에 저장되어있는 state를 읽어오는 hook
//    const count = useSelector(state => state.count)

//    //useDispatch : store에 action을 보낼 수 있는 hook
//    const dispatch = useDispatch()
//    return (
//      <div>
//        {/* 현재 state인 count의 값을 화면에 출력한다. */}
//        <h1>Counter : {count}</h1>
//        {/* Increment버튼을 클릭하면 increment() 액션을 디스패치한다. */}
//        <button onClick={()=>dispatch(increment())}>Increment</button>
//        <button onClick={()=>dispatch(decrement())}>Decrement</button>
//      </div>
//    )
// }//redux

// function TodoApp() {
//   const [input, setInput] = useState('')
//   const todos = useSelector(state => state.todos)//redux에서 todo state를 가져옴
//   const dispatch = useDispatch() //액션을 dispatch하는 함수 가져오기

//   //추가 버튼을 눌럿을 때 input태그에 있는 내용 li에 추가하기
//   const handleAddTodo = () => {
//     if (input.trim()) {//input태그의 값이 비었는지 검사
//       dispatch(addtodo(Date.now(), input))//id와 내용을 액션에 전송해서 dispatch가 리듀서로 전송
//       setInput('')//입력창 비우기
//     }
//   }
//   const handleRemoveTodo = (id) => {
//     dispatch(removetodo(id))//todo를 삭제
//   } //todo

// function App() {
//   //input태그에 입력된느 값을 저장하는 state
//   const [usernameInput, setUserNameInput] = useState('')
  
//   //redux상태에서 로그인 정보 가져오기
//   const [isLogIn, username] = useSelector((state) => state)
  
//   const dispatch = useDispatch();

//   //로그인 검증
//   const handleLogin =() =>{
//     //input태그에 뭐라도 적혀있을때
//     if(usernameInput.trim()){
//       //유저네임을 전달받은 login()액션을 변환한 객체를 리듀서에 전달
//       dispatch(login(usernameInput))
//       setUserNameInput('')
//     }
//   }
//   const handleLogout = () =>{
//     dispatch(logout())
//   } //login

function App(){
  const products=[
    {id:1 , name: 'Apple'},
    {id:2 , name: 'Banana'},
    {id:3 , name: 'Orange'}
  ]
  const cart = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  //제품을 카트에 추가
  const handleAddToCart = (id,name)=>{
    dispatch(addToCart(id,name))
  }

  //제품을 카트에서 제거
  const handleRemoveFromCart = (id)=> {
    dispatch(removeFromCart(id))
  }


return (
 <div>
    <h1>Products</h1>
    <ul>
      {products.map(product=>(
        <li key={product.id}>
          {products.name}
          <button onClick={()=>handleAddToCart(product.id, product.name)}>
            카트에 담기
          </button>
        </li>
      ))}
    </ul>
    <h2>Shoping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart  is empty</p>
    ):(
      <ul>
        {cart.map(item=>(
          <li key={item.id}>
            {item.name} (x{item.quantity})
            <button onClick={()=>handleRemoveFromCart(item.id)}>
              카트에서 빼기
            </button>
          </li>
        ))}
      </ul>
    )}
 </div>
    
)
}//cart


export default App
