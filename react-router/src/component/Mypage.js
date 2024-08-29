import { Navigate, useNavigate } from "react-router-dom";


function Mypage() {

  //권한검사 - 렌더링 과정에는 사용이 불가능
  //let nav = useNavigate();

  let loginYN = false; //로그인 처리에 대한 내역을 관리하는 값 (일단은 false로 가정->접근못함)

  if(!loginYN) {
    //nav('/'); //이렇게말고
    return <Navigate to='/' replace={true}/> //이렇게->history를 남기지 않음
  }

  return (
    <>
      <h3>권한이 있는 유저만 접근이 가능한 화면</h3>
    </>
  )
}

export default Mypage;