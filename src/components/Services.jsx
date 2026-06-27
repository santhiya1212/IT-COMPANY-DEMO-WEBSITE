import Navbar from "./Navbar";
import Footer from "./Footer";

import cloud from "../assets/images/services/cloud.jpg";
import ai from "../assets/images/services/ai.jpg";
import cyber from "../assets/images/services/cyber.avif";
import analytics from "../assets/images/services/analytics.jpg";
import software from "../assets/images/services/software.jpg";
import digital from "../assets/images/services/digital.jpg";

function Services() {

const services=[

{
title:"Cloud Engineering",
image:cloud
},

{
title:"Artificial Intelligence",
image:ai
},

{
title:"Cyber Security",
image:cyber
},

{
title:"Data Analytics",
image:analytics
},

{
title:"Software Development",
image:software
},

{
title:"Digital Transformation",
image:digital
}

];

return(

<>

<Navbar/>

<section className="py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>

Our Services

</h2>

<p>

Building next-generation enterprise solutions.

</p>

</div>

<div className="row">

{

services.map((item,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="service-card">

<img
src={item.image}
className="img-fluid"
/>

<div className="p-4">

<h4>

{item.title}

</h4>

<p>

Helping organizations accelerate
their digital transformation journey.

</p>

<button className="btn btn-primary">

Know More

</button>

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

export default Services;