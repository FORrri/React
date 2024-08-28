import { useState } from "react";


function StateComponent() {

  //useState는 함수형 컴포넌트에서만 사용할 수 있는 hook
  //반환이 배열이고 [0]번째에 현재 데이터, [1]번째는 값을 변경하는 setter함수를 반환함

  let [data, setData] = useState('초기값'); //아래처럼 변수 선언하지 말고, 구조분해할당 이용
  //let data = result[0]; //헌재data
  //let setData = result[1]; //function
  
  //console.log(result);
  //console.log(data);
  //console.log(setData);

  let [msg, setMsg] = useState('black');

  
  let enter = () => {
      //data = "이렇게 값을 바꾸면?" //값을 직접 바꾸는 것을 허용하지 않음.
      setData("이렇게 값을 바꾸는 거임") //값을 변경하는 setter함수 -> 비동기적으로 데이터를 change, 리렌더링 수행
  }

  console.log(data); //맨뒤에서부터 처음부터 화면을 다시 그림(초기값도 나옴)
  

return(
  <div>
    현재 데이터 {data} <br/>
    값 변경하기 <button onClick={enter}>입장</button> <br/>
    값 변경하기 <button onClick={() => setData("퇴장했습니다")}>퇴장</button> <br/>

    <h3 style={{color: msg}}>{msg}</h3>
    <button onClick={ () => setMsg('red')}>붉은색</button>
    <button onClick={ () => setMsg('green')}>푸른색 </button>
    <button onClick={ () => setMsg('yellow')}>그 사이 3초 짧은색</button>

  </div>
)

}
export default StateComponent;