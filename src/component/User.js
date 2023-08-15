import { useLocation, useSearchParams } from "react-router-dom";


function User() {

  //쿼리스트링 값을 받는 방법1
  const location = useLocation();
  console.log(location.search);

  //쿼리스트링 값을 받는 방법2 
  //첫번째인덱스 - set,get가진 객체
  //두번째인덱스 - 쿼리스트링을 직접변경할 수 있는 함수
  const [obj, setObj] = useSearchParams();

  let id = obj.get("id"); //request.getParameter("키")
  let name = obj.get("name");

  const handleClick = () => {
    setObj({id: '변경', name: '변경'}); //이후에 렌더링
  }

  



  return (
    <div>
      <p>유저페이지</p>

      쿼리스트링id: {id}
      쿼리스트링name: {name}

      <button onClick={handleClick}>쿼리스트링제어하기</button>
    </div>
  );
}
export default User;