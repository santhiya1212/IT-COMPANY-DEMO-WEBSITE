import Navbar from "./Navbar";
import Footer from "./Footer";

import banking from "../assets/images/industries/banking.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import insurance from "../assets/images/industries/insurance.jpg";
import manufacturing from "../assets/images/industries/manufacturing.jpg";
import retail from "../assets/images/industries/retail.jpg";
import telecom from "../assets/images/industries/telecom.jpg";

function Industries() {

const industries=[

{title:"Banking",image:banking},

{title:"Healthcare",image:healthcare},

{title:"Insurance",image:insurance},

{title:"Manufacturing",image:manufacturing},

{title:"Retail",image:retail},

{title:"Telecommunications",image:telecom}

];

return(

<>

<Navbar/>

<section className="py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>Industries We Serve</h2>

<p>Delivering solutions across diverse business sectors.</p>

</div>

<div className="row">

{

industries.map((item,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="industry-card">

<img src={item.image} className="img-fluid"/>

<div className="industry-content">

<h4>{item.title}</h4>

<p>Modern digital solutions for enterprises.</p>

</div>

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

export default Industries;