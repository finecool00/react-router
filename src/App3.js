import axios from "axios"
import {useEffect, useState} from "react"

function App() {

  /* 
  npm install axios 설치
  
  */

  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => setData(response.data))
  }

  //이 데이터를 화면에 로드될 때 axios로! select태그의 옵션으로 처리해주세요
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  const [raw, setRaw] = useState();
  //선생님 풀이↓
  //const [opt, setOpt] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    .then(response => setRaw(response.data.map((item, index) => <option key={index}>{item.key} - {item.value}</option>)))
    //선생님풀이↓
    //.then( a => setOpt(a.data));
  }, []);





    //async & swait 실습예제
    //1. async안에서 await을 사용할 수 있다.
    //2. function에 async를 붙이면 리턴이 프로미스가 됩니다.
    //3. 리턴이 promise라면 await을 사용할 수 있고, then을 생략할 수 있음
    const handleClick2 = async () => {
        /* axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(data => 
          {console.log(1)

            axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
            .then(data => 
            {console.log(3)

              axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
              .then(data => {
              console.log(5)
              })

            })  
          
          });
    
        console.log(2);
        console.log(4);
        console.log(6); */

        const result = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
        console.log(result); //1

        const result2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json');
        console.log(result2); //2

        const result3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json');
        console.log(result3); //3
    }




  return (
    <div>
      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>어싱크 확인하기</button>

      <p>
        {data.userId}<br/>
        {data.userPw}<br/>
        {data.userName}<br/>
      </p>


      <p>데이터 로드 시</p>
        
      
        {
          raw !== undefined ?
          <select>
            {raw}
          </select>
          : undefined
        }    
        
        {/* 선생님 풀이↓ */}
        {/* <select>
         {opt.map(item => 
            <option key={item.kdy} value={item.value}>
              {item.value}
              </option>)}  
        </select> */}    

    </div>
  );
}

export default App;