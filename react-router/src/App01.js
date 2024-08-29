import { Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Info from './component/Info';
import User from './component/User';
import BoardContent from './component/BoardContent';
import Board from './component/Board';
import Header from './layout/Header';
import Mypage from './component/Mypage';

function App() {
  return (
    <Routes>

      {/*중첩라우터*/}
      <Route element = {<Header/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/info/:num' element={<Info/>}/>
      <Route path='/user' element={<User/>}/>
      </Route>

      {/*중첩라우터가 아니고 각각 다른 2개의 화면임
      <Route path='/board' element={<Board/>}/>
      <Route path='/board/:num' element={<BoardContent/>}/>
       */}

      {/*중첩라우터*/}
      <Route path='/board' element={<Board/>}>
        <Route path=':num' element={<BoardContent/>} />
      </Route>

      {/* navigate컴포넌트 */}
      <Route path='/mypage' element ={<Mypage/>} />


    </Routes>
  );
}

export default App;
