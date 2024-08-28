import { useState } from "react";


function EventComponentQ(){

  let [add, setAdd] = useState('');
  let [button, setButton] = useState('');

  let handleChange = (e) => {
    setAdd(e.target.value);
  }

  let handleClick = (e) => {
    setButton("");
  }
  

  return (
    <div>
      <h3>인풋이벤트 핸들링(실습) </h3>
      <p>클릭시 데이터는 공백으로 결과는 입력한 값으로 처리</p> 
      힌트 : 아마도 state 두개가 필요할듯? (객체로 관리해도 가능) <br/>

      <input type="text" name="add" value={add} onChange={handleChange}></input>
      <button type="button" name="button" value={button} onClick={handleClick} >추가하기</button> <br/>
      
      <h3>결과</h3> <br/>
      <p>{add}</p>

   
    </div>
  )

}
export default EventComponentQ;