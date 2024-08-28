import { useState } from "react";

//실습
const StateComponentQ = () => {

  const [count, setCount] = useState(0);

  let increase = () => {
    //setCount(data+1);
    //setCount(함수); //함수의 첫번째 매개변수에 이전값을 넣어줌
    setCount( prev => prev + 1); //prev는 state의 이전값을 받을 수 있음.

  }
 
  return(
    <div>
      <h3>실습</h3> <br/>
      <h3>카운트:{count}</h3> <br/>

      {/* <button onClick={ () => setCount(count+1)}>증가</button> */}
      <button onClick={increase}>증가</button>
      <button onClick={ () => setCount(count-1)}>감소</button>
      <button onClick={ () => setCount(0)}>초기화</button>

    </div>
  )

}
export default StateComponentQ;