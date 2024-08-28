import { useState } from "react";


function IterationComponent2() {
  
  //1. 기존의 가짜 데이터 -> 서버에서 받아오는 데이터
  const data = [
    {id: 1, topic: 'hello world!'}, 
    {id: 2, topic: 'bye bye~'}
  ];

  let [list, setList] = useState(data);
  //3. input태그 state로 관리
  let [topic, setTopic] = useState('');


  //4. 버튼 클릭시 input state값을 배열에다가 추가
  let handleClick = () => {

    //console.log(list[list.length-1].id); //2
    
    let obj = {id: list[list.length-1].id +1 , topic: topic} //id는 list의 마지막 값 + 1
    //console.log(obj);
    
    let newList = list.concat(obj); //배열.concat(배열), 배열.concat(오브젝트)
    //console.log(newList);

    //state업데이트
    setList(newList); //처음부터 자동으로 렌더링(리렌더링)
    setTopic(''); //input 초기화
    

  }
  
  //5. 삭제기능(filter사용)
  let hanldeRemove = (id) => { //매개변수 - 클릭한 대상의 id값
    
    //filter
    let newList = list.filter( (value) => {
      console.log(value);
      return value.id != id; //클릭한 id가 빠짐 -> 리턴에 실린 값이 true인 데이터만 필터링
    })
    
    //필터링 시킨 데이터를 state로 변경 -> 렌더딩
    //console.log(newList);
    setList(newList);
    
    
  }
  //2. (화면을 그려주는거)리스트를 이용해서 반복처리 -> 이벤트가 태그보다 위쪽에 위치-초기화(이건 맨 아래로 내려야함)
  //이벤트에 함수 매개변수를 주고 싶으면 () => { 실행시킬함수(매개값) }
  const newList = list.map( value => <li key={value.id} 
                                         onDoubleClick={ () => hanldeRemove(value.id) }>{value.topic}</li> ) //이벤트에는 funtion이 들어가야함
                                         //onDoubleClick={ () => {} }>{value.topic}</li> ) 


  return (
    <>
      <h3>간단한 할일 목록 만들기(더블클릭하면 삭제)</h3>
      <ul>
        {newList}
      </ul>

      <input type="text" value={topic} onChange={ (e) => setTopic(e.target.value) }/>
      <button type="button" onClick={handleClick}>추가하기</button>
    </>

  )
}

export default IterationComponent2;