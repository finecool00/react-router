import { Navigate, useNavigate } from "react-router-dom";


function MyPage() {

  const loginYN = false; //localStorage.getItem("token");
  
  // navigate 훅은 이벤트와 연결시 사용하는 것이 맞음
  // 렌더링 과정에서 사용 불가!!

  // const nav = useNavigate();
  // if(!loginYN) {
  //   nav('/');
  // }

  //to = 경로, replace = 기록을 남기는지 여부(true / false)
  if(!loginYN) {
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div>
      <h3>여기는 권한이 있는 사람만 접근할 수 있음</h3>

    </div>
  );
}

export default MyPage;
