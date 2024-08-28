

import React, { useState, useRef } from "react";

const HookQ2 = () => {
  
  const [state, setState] = useState({ todo: "", list: [] });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setState({ ...state, todo: e.target.value }); 
  };

  const handleAddTodo = () => {
    if (state.todo.trim() === "") return; 

    setState({ ...state, list: [...state.list, state.todo], todo: "" });
    
    inputRef.current.focus();
  };

  return (
    <div>
    <h3>실습</h3>
      <input type="text" placeholder="할일 목록을 작성하세요" value={state.todo} onChange={handleChange} ref={inputRef}/>
      <button type="button" onClick={handleAddTodo}>등록</button>
      <ul>
        {state.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookQ2;
