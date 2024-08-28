import { useEffect, useState } from "react";

function HookEffect() {

  //useState훅
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  //useEffect훅 -> 컴포넌트 라이프사이클 관리(4가지)

  // useEffect( () => {
  //   console.log('1. mount 이후에 동작됨(렌더링 이후에 동작)');
  // })

  // useEffect( () => {
  //   console.log('2. mount이후에 처음 딱 한번만 실행됨(네트워크 상으로 데이터를 가지고올때 사용함)');
  // }, []);

  // useEffect( () => {
  //   console.log('3. 특정 값이 변경되어 렌더링 될때 동작됨(특정 state가 변경될때만 실행됨)');
  // }, [data]); //위에 data 변경될때만 실행

  useEffect( () => {
    console.log('effect실행됨~');
    return () => {
      console.log('4. unmount(소멸) 되기전에 실행됨'); //기존에 있던 거 소멸(return + 함수모형)
    }
  }, [data]); //여러가지 조합도 가능

  //useEffect는 여러 개 일수 있습니다.
  // useEffect( () => {
  //   console.log('effect실행됨22');
  // });

  //무한루프에 빠질 수 있는 코드->빨리꺼야함
  // const [ex, setEx] = useState({name : '홍길동'});
  // useEffect( () => {
  //   let copy = {...ex};
  //   setEx(copy);
  // }, [ex]);


  console.log('코드 실행됨!');
  
  return (
    <>
      <input type="text" value={data} onChange={ (e) => setData(e.target.value) } /> {data} <br/>
      <input type="text" value={age} onChange={ (e) => setAge(e.target.value)} /> {age} 
      
      

    </>
  )
}

export default HookEffect;