import { useContext, useRef } from "react";
import UserContext, { UserConsumer } from "../context/ContextAPI2";
import C from "./C";


function A() {

  //useContext 훅 - 이용해서 값 조회 or 값 제어
  //provider의 value값을 사용할 수 있음. 그래서 구조분해할당으로 사용할 값을 표현
  const {state, action} = useContext(UserContext);
  
  //ref 훅
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  //handleClick함수
  const handleClick = () => {
    //provider값을 외부에서 변경
    // console.log(action);
    action.setUser({id: inputRef1.current.value,
                    name: inputRef2.current.value
                   });

    inputRef1.current.value = '';
    inputRef2.current.value = '';
  }

  return(
    <div>
  
      <input type="text" ref={inputRef1}/>
      <input type="text" ref={inputRef2}/>
      <button onClick={handleClick}>provider값 변경하기</button>

      <div>
        {state.id}<br/>
        {state.name}<br/>
      </div>

      <C/>
  
      {/* <UserConsumer>
        {
          (value) => <div>
            {value.state.id}<br/>
            {value.state.name}
          </div>
        }
      </UserConsumer> */}
    </div>
  );
}

export default A;