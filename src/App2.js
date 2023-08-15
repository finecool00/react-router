import {useEffect, useState} from "react"

function App() {

  //1st - 에러를 피하고 싶었어~!
  // const [data, setData] = useState({}); //초기값을 지정하여 에러해결
  
  //2nd
  const [data, setData] = useState();


  const handleClick = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      setData(data);
    })
  }


  const [raw, setRaw] = useState();

  //화면 로드시 데이터 불러오기
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(response => response.json())
    .then(data => {
      setRaw(data);
      
    })
  }, []) //대괄호 -> 처음에만 마운트되게 함




  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼클릭시 데이터가져오기</p>
      <button onClick={handleClick}>데이터로드</button>


      {
        data !== undefined ?
        <p>
          {data.userId}<br/>
          {data.userPw}<br/>
          {data.userName}<br/>
        </p>
        : null
      }

      <p>데이터 로드시 가져오기</p>

      {
        raw !== undefined ?
        <p>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}<br/>
        </p>
        : null
      }

    </div>
  );
}

export default App;