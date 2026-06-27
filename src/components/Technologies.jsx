import Navbar from "./Navbar";
import Footer from "./Footer";

import {
FaReact,
FaJava,
FaNodeJs,
FaDocker,
FaAws
} from "react-icons/fa";

import {SiMysql} from "react-icons/si";

function Technologies(){

const tech=[

{icon:<FaReact/>,name:"React JS"},

{icon:<FaNodeJs/>,name:"Node JS"},

{icon:<FaJava/>,name:"Java"},

{icon:<FaAws/>,name:"AWS"},

{icon:<FaDocker/>,name:"Docker"},

{icon:<SiMysql/>,name:"MySQL"}

];

return(

<>

<Navbar/>

<section className="py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>Technology Stack</h2>

</div>

<div className="row">

{

tech.map((item,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="tech-card">

<div className="tech-icon">

{item.icon}

</div>

<h4>{item.name}</h4>

</div>

</div>

))

}

</div>

</div>

</section>

<Footer/>

</>

);

}

export default Technologies;