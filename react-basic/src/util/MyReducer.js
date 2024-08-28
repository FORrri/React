

export const myReducer = (state, action) => { //state값, action값
  console.log(state);
  console.log(action);

  //action에 따라서 state를 변경하는 작업 수행
  if(action === "increase") {
    state = {value : state.value + 1}; //증가
  } else if(action === "decrease") {
    state = {value : state.value -1}; //감소
  } else if(action === "reset") {
    state = {value : 0}; //초기화
  }
  return state; //여기서 반환되는 state는 reduce의 상태값으로 다시 반환이 됩니다.
}