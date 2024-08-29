import { useEffect, useState } from "react";


function App() {

  //ajax -> 
  //https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json (예제데이터)

  const [data, setData] = useState();

  const getData = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      //state로 관리함
      setData(data);
    })
  }

  //화면 로드시에 데이터를 가지고 올때는 useEffect훅
  const [raw, setRaw] = useState();
  useEffect( () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => response.json())
    .then( data => {
      //console.log(data);
      setRaw(data); //update렌더링하고 또다시 위에서부터 렌더링(무한루프에 빠짐)
    })
  }, []) //★화면이 생성될때 딱 1번 실행하는 코드 []

  console.log(raw);
  
  return (
    <>
      <h3>ajax로 데이터 처리하기</h3>
      <button onClick={getData}>클릭할때 네트워크 통신</button>

      { /*if문 대신 삼항연산자*/
        data !== undefined ?
        <div>
          {data.userId} <br/>
          {data.userPw} <br/>
          {data.userName} <br/>
        </div>
        :
        null
      }

      <h3>로드시에 데이터 가져오기</h3>
      {
        raw && <div>
          userId : {raw.userId} <br/>
          userPw : {raw.userPw} <br/>
          userName : {raw.userName} <br/>

        </div>
      }


    </>
  );

  }


export default App;