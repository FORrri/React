import { Fragment } from "react";
import StateComponent from "./component/StataComponent";
import StateComponentQ from "./component/StateComponentQ";
import ClassComponent from "./component/ClassComponent";

function App() {
  return (
    <Fragment>
        <StateComponent/>

        <br/>
        <StateComponentQ/>

        <br/>
        <ClassComponent name="홍길동" age={20}/>

    </Fragment>
  )

}
export default App;