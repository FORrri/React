import { Component } from "react";

//함수형 vs 클래스형
class ClassComponent extends Component {

  constructor(props) { //프롭스가 전달됩니다.
    super(props); //생성자 연결
    this.state = {
      a : 1,
      b : this.props.name
    }
  }

  //렌더 함수 오버라이딩
  render() {

    let {name, age} = this.props; //구조분해할당 - props는 멤버변수에 저장 됩니다.
    let {a, b} = this.state;  //state값
    
    return(
      <div>
      클래스형 컴포넌트 예제 <br/>
      prop1 : {name}, prop2 : {age} <br/>
      state1 : {a}, state2 : {b}
    </div>
    )

  }

}

export default ClassComponent;