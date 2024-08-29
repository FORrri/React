import { useParams, useSearchParams } from "react-router-dom";


function User() {

  //1. useParam훅을 이용
  // const location = useParams();
  // const {search, pathname} = location;
  // console.log(search);
  // console.log(pathname);

  //2.useSearchParam()훅을 사용
  const [obj, setObj] = useSearchParams();
  //console.log(useSearchParam);
  console.log(obj); //값을 얻을 수 있음
  console.log(setObj); //URI값을 강제로 변경 가능

  console.log("-----------------------------------------------");
  
  let name = obj.get("name"); //name키를 얻음
  let age = obj.get("age"); //age키를 얻음
  console.log("전달된 파라미터:", name, age);

  const handleClick = () => {
    setObj({name: '이순신', age: 30})
  }
  
  return (

    <div>
      <h3>유저 페이지입니다</h3>
      <button type="button" onClick={handleClick}>URI변경</button>
    </div>
  )
}

export default User;