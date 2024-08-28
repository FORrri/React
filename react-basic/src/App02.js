import MyComponent from "./component/MyComponent";


//예제 app
function App() {

  return (
    <>
      <MyComponent name={"홍길동"} age={20} addr={"서울시"}/> props사용
      <MyComponent /* name="이순신" age={30} addr={"부산시"} *//> 
    </>
  )
}

export default App;
