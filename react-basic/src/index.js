import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //appjs를 받아서 App이름으로 import
import reportWebVitals from './reportWebVitals';

//컴포넌트에서 사용하는 전역설정이 들어감
//App JS를 index - ID:root 태그에 넣어주고 있음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> //값을 한번 더 검증 -> run하면 한 번 더 실행됨
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
