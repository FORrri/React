

function IterationComponent() {

  const arr = [1,2,3,4,5];

  //const newArr = arr.map( (value, index) => value * 10 );
  //console.log(newArr);

  //li태그는 react element -> 반드시 고유한 key props(key 매개변수/ 여기서는 일단 index로)전달하도록 권고하고 있음
  const newArr = arr.map( (value, index) => {
    return <li key={index}> 값: {value}</li>
  });

  //console.log(newArr);
  

  return (
    <div>
      컴포넌트 반복
      <ul>
        {newArr}
      </ul>

    </div>
  ) 
}

export default IterationComponent;