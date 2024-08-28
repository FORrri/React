import { useReducer } from "react";

const nameReducer = (state ,action) => {
  //action에 전달되는 값은 엘리먼트

  //state는 유지하면서 전달되는 name에 따라서 key를 바꿈
  state = {...state, [action.name] : action.value};

  return state;
}

function HookReducer2G() {

  //name과 age를 동시에 처리할 수 있는 nameReducer함수를 생성을합니다.
  //초기값은 {name : '', age : 0}
  //리듀서 함수 안에서는 객체 값을 state = {...state, [키]: value};
  //action함수는 매개변수에 값을 주면 됩니다.
  const [state, action] = useReducer(nameReducer, {name : '', age : 0} );


  return (
    <>
      <input type="text" name="name" value={state.name} onChange={(e) => action(e.target) } />
      <input type="number" name="age" value={state.age} onChange={(e) => action(e.target) } />

      리듀서를 통해서 변경된 값: {state.name}, {state.age}

    </>
  )

}

export default HookReducer2G;