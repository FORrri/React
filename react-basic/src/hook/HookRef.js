import { useRef } from "react";


function HookRef() {
  // useRef 훅을 사용하여 input 요소에 대한 참조를 생성합니다.
  // useRef는 초기값으로 null을 받으며, input.current는 현재 참조된 DOM 요소를 나타냅니다.

  //화면에서 다이렉트로 접근을 해서 사용할 태그가 있다면 ref로 연결하면 됩니다.
  let input = useRef(null);

  let handleClick = () => {
    // input은 useRef로 연결된 ref 객체입니다.
    // input.current는 현재 연결된 DOM 요소(input 태그)를 가리킵니다.
    
    //console.log(input);
    //console.log(input.current); // ref로 연결된 실제 DOM 요소 (input 태그)
    console.log(input.current.type); // input 요소의 타입 (text)
    console.log(input.current.value); // input 요소의 현재 값 (사용자가 입력한 값)

    alert(input.current.value);

    // input 요소에 포커스를 설정하여 사용자가 다시 입력할 수 있도록 합니다.
    input.current.focus();

    // 참고: 리액트에서 input.current.value로 직접 값을 설정하는 것은 비선호됩니다.
    // 대신, React의 상태(state)를 통해 값을 관리하는 것이 권장됩니다.
    // 예를 들어, setState를 사용하여 상태 업데이트를 처리하는 것이 좋습니다.
  }


  return (
    <>
      <h3>useRef</h3>
      {/* ref 속성을 사용하여 input 요소를 input 변수에 연결합니다. */}
      <input type="text" ref={input} />
      <button type="button" onClick={handleClick}>등록</button>
    </>

  )
}

export default HookRef;