
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

    // 데이터를 저장할 상태를 생성합니다.
    const [data, setData] = useState(null);

    // 화면 로드시 데이터 가져오는 useEffect 추가
    useEffect(() => {
    // 즉시 실행 함수 (IIFE)로 데이터를 비동기적으로 가져옴
    (async function fetchDataOnLoad() {
      try {
        const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
        console.log('실습 hi.json 데이터:', data1.data);
      } catch (error) {
        console.error('Error fetching data on load:', error);
      }
    })();  // 즉시 실행 함수를 호출
  }, []);  // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정

  const handleClick = async() => {

    //https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json (예시데이터1)
    //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json (예시데이터2)

    // const promise = axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
    // console.log(promise);

    // console.log("------콜백지옥 : asyne, await로 해결-----");
    
    // 비동기 방식에서 데이터의 순서를 보장받고 싶다면, 이렇게 작성해야 합니다.
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then( response => {
    //   console.log(response.data);
    //   console.log(1);

    //       axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //       .then( response => {
    //         console.log(response.data);
    //         console.log(3);
    //       });

    //           axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //           .then( response => {
    //             console.log(response.data);
    //             console.log(5);
    //           });
    // });

    // console.log(2);
    // console.log(4);
    // console.log(6); 

    //async(이거 비동기야), await(그러니까 기다려)
    //1. ★async함수 안에서만 await키워드를 쓸 수 있음.
    //2. 만약 function앞에 async를 붙이면 언제나 Promise객체를 반환함->쓸 일 많이 없음
    //3. ★함수의 리턴이 Promis라면 await키워드를 붙이고 then을 생략할 수 있음

    //장점
    //1. 코드가 간결해짐
    //2. 수행방식을 동기방식으로 바꾸면서, 순서가 보장이 됨

    const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json') //3. axios.get 리턴 promise
    console.log(data1.data);
    console.log(1);
    
    const data2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    console.log(data2.data);
    console.log(2);

    const data3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    console.log(data3.data);
    console.log(3);

    console.log("----------await 사용해서 간결하게 표현----------");

    const result = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
                          .then(response => response.json())
    //console.log(response);
    //const result = await response.json();
    console.log(result);

    //실습 : 힌트(즉시실행 함수를 사용함)
    //화면 로드시에 hi.json데이터를 async, await으로 가져오는 프로그램 코드를 작성해 보세요.
    
  };

  return (
    <>
      <h3>Axios로 데이터 받기</h3>
      <button onClick={handleClick}>클릭시 네트워크 통신으로 데이터 가져오기</button>

      <h3>실습</h3>
      {data ? (
        <div>
          <h4>hi.json 데이터:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>success</p>
      )}

    </>
  )
}

export default App;