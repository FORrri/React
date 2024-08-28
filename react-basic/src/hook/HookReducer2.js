import { useReducer } from "react";

const nameReducer = (state, action) => {
  
  if(action.type === "name") {
    state = {...state, name: action.payload}
  } else if(action.type === "age") {
    state = {...state, age: action.payload}
  }

  return state;
}


function HookReducer2() {

  //name과 age를 동시에 처리할 수 있는 nameReducer함수를 생성 합니다.
  //초기값은 {name : '', age : 0}
  //리듀서 함수 안에서는 객체 값을 state = {...state, [키]: value};
  //action함수는 매개변수를 값을 주면 됩니다.

  const [state, actionFunc] = useReducer(nameReducer, {name : '', age : 0})

  return(
    <>
    
    <input type="text" name="name" onChange={ (e) => actionFunc({ type: "name", payload: e.target.value })}/> <br/>
    <input type="number" name="age" onChange={ (e) => actionFunc({ type: "age", payload: Number(e.target.value) })}/> <br/>

    리듀서를 통해서 변경된 이름값: {state.name} <br/>
    리듀서를 통해서 변경된 나이값: {state.age} <br/>

    </>
  )
}

export default HookReducer2;