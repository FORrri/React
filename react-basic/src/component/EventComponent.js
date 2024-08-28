import { useState } from "react";



function EventComponent() {

  //let a = document.querySelector("input[name=name]"); //js에서 이렇게 썼지만 리액트가 선호하는 방식은 아님

  //1. 인풋이 관리할 값은 state로 선언합니다.(이걸 리액트가 선호)
  //2. 인풋태그에 value에 state연결
  //3. 이벤트를 통해서 input값을 제어
  let [name, setName] = useState('');
  let [topic, setTopic] = useState('');
  let [menu, setMenu] = useState('피자'); //처음에 선택되어 있는값: 피자
  
  let handleName = (e) => { //이벤트객체e
    //console.log(e.target.value); //사용자가 입력한 값
    setName(e.target.value); //state에 저장
  }

  let handleTopie = (e) => {
    setTopic(e.target.value);
  }

  let handleClick = () => {
    alert(`${name} 님의 입력값 ${topic}`);
    setName(''); //클릭한 후 공백으로 초기화
    setTopic('');
  }

  let handleKeyup = (e) => {
    //console.log("키보드를 눌렀다가 뗄 때 동작함");
    if(e.key ==='Enter') { //엔터를 눌렀을때
      handleClick();
    }
    
  }

  let handleMenu = (e) => {
    //console.log(e.target.value);
    setMenu(e.target.value);
  }
  
  return(
    <div>
      인풋이벤트 핸들링 <br/>
      <input type="text" name="name" value={name} onChange={handleName}/> <br/>
      결과 name_state값: {name} <br/>

      <input type="text" name="topic" value={topic} onChange={handleTopie} onKeyUp={handleKeyup}/> <br/>
      결과 topic_state값: {topic} <br/>

      <button type="button" onClick={handleClick}>클릭이벤트</button>

      <hr/>

      <h3>셀렉트 태그 핸들링(실습)</h3>
      <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

      <select onChange={handleMenu}>
          <option>피자</option>
          <option>햄버거</option>
          <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{menu}</p>

    </div>

  )

}

export default EventComponent;