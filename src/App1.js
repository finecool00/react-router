import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Info from "./component/Info";
import User from "./component/User";
import BoardContent from "./component/BoardContent";
import Board from "./component/Board";
import Header from "./layout/Header";
import MyPage from "./component/MyPage";

function App() {

  return (

    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Home />} />
        {/* 쿼리스트링 */}
        <Route path="/user" element={<User />} />
        {/* 쿼리파라미터 - 추가설정(/:a -> /info뒤에 들어가는데 바뀔 수 있는 값이라는 의미) */}
        <Route path="/info/:a/:b" element={<Info />} />
      </Route>


      {/* board, boardContent분기 */}
      {/* <Route path="/board" element={<Board/>} />
      <Route path="/board/:num" element={<BoardContent/>} /> */}

      {/* board의 자식 boardContent 중첩라우터 */}
      {/* Outlet컴포넌트 추가 */}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>
      
      {/* navigate 컴포넌트 */}
      <Route path="myPage" element={<MyPage/>}/>



    </Routes>

  );
}

export default App;