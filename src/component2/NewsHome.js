import axios from "axios";
import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import Category from "./Category";


function NewsHome() {

  return (
    <div>
      뉴스홈
      <Category/>
      <NewsList/>

      
    </div>
  );
}

export default NewsHome;