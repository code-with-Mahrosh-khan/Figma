import React from "react";
import Mainpage from "./mainpage"
import Sidebar from './sidebar';
import Page from "./page";
import Count from './about/Count';

function Homepage() {
    return(
<div>

     <Mainpage/>
      <Sidebar />
  <Page />
<Count/> 


</div>
  ) ;
    
};

export default Homepage ;