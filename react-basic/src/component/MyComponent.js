import PropTypes from 'prop-types'; //프롭스 타입검사 import

function MyComponent( {name = "이름없음", age = 0, addr = "경기도"} /* props */) { //props값을 전체로 받음

    return (
    <div>
      이름:{name}<br/>
      나이: {age}<br/>
      주소: {addr}<br/>
    </div>
  )

  //console.log(props);
  
/*   return (
    <div>
      이름:{props.name}<br/>
      나이: {props.age}<br/>
      주소: {props.addr}<br/>
    </div>
  ) */
}

//props의 기본값 지정
//React 18버전 이후 사용을 지양(사용시 콘솔창 경고발생)
//-> 대신 MyComponent() 안에 써주기

// MyComponent.defaultProps = { 
//   name : "이름없음",
//   age : 0,
//   addr : "경기도"
// }

//props의 타입 검증 -> 실제 에러가 나는 것은 아니지만, 타입에 대한 힌트를 줍니다.
MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string
}


export default MyComponent;