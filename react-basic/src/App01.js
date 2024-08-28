//import logo from './logo.svg';
//import './App.css';

import {Fragment} from "react";

/*
  필요한 파일들을 불러올때 webpack loader이 사용됩니다.
  웹팩 로더는 직접 설치가 가능하고, 보일러플레이트로 만들경우는 자동 설정됩니다.
  웹팩 로더안에 babel이란 도구가 ES6 -> ES5로 다운그레이드 시키는 역할을 합니다.
*/

function App() {

  let name = "홍길동";
  let age = 20;

  return (
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 화면을 그리고 싶은 코드가 들어감~수정
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

      <Fragment>
      <h3>JSX문법 입니다</h3>
        <ul>
          {/* 주석-중괄호써야함 */}
          <li>1. JS파일은 JSX(JS+HTML)라고 부릅니다. 주석은 alt+shift+a </li>
          <li>2. JSX은 반드시 하나의 태그를 return 해야합니다.</li>
          <li>3. div를 사용해서 묶어도 되고, Fragment or <></> 모형으로 묶어주면 됩니다.</li>
          <li>4. 변수값을 사용할 떄는 {name}, {age} 로 참조합니다.</li>
          <li>5. if문 보다는 삼항연산식을 사용합니다.</li>
          <li>6. 화면에 보여주고 싶은 문장이 없다면 null을 리턴하면 됩니다.</li>
          <li>7. undefined 반환은 지양하고 null으로 리턴하기</li>
          <li>8. DOM요소에 css를 직접 넣을 때는 객체형으로 묶고, 속성은 카멜표기법으로 사용됩니다.</li>
          <li>9. Class속성은 전부 className 으로 변경됩니다.</li>
          <li>10. 홀로 사용되는 태그는 반드시 / 로 닫는태그를 작성합니다. {/* <input/> <br/> */}</li>
        </ul>

        <div className='example'>
            클래스명?
            <br/>
            <input name="name" value={name}/>
        </div>

        <div style={{color : "red", backgroundColor : "yellow", fontSize : 24}}>
          {name === '홍길동' ? '리액트입니다' : '리액트가 아닙니다' }
          {age !== 20 ? <h6>20입니다</h6> : null}

        </div>
        </Fragment>

  );
}

export default App;
