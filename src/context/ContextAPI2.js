import {createContext, useState} from "react";

//1.
const UserContext = createContext({
  state : {id: '초기값', name: '초기값'},
  action : {
    setUser: () => {}
  }
})

console.log(UserContext);

//2. Provider함수 선언

const UserProvider = ({children}) => { //반드시 이름이 children이어야 함 값을 받는 자식들...!?!
const [user, setUser] = useState({id: 'aaa', name: '홍길동'})
const value= {
  state : user,
  action : {setUser}
}

return <UserContext.Provider value= {value}>{children}</UserContext.Provider>
}

//3. Consumer함수 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

export default UserContext;
