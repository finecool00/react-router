import {createContext} from "react";

//전역으로 사용할 컨텍스트API
const ColorContext = createContext({color: 'red'}); //초기값

console.log(ColorContext);

export default ColorContext;
