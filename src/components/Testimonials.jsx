import Navbar from "./Navbar";
import Footer from "./Footer";

import client1 from "../assets/images/testimonials/client1.jpg";
import client2 from "../assets/images/testimonials/client2.webp";
import client3 from "../assets/images/testimonials/client3.jpg";

function Testimonials() {

const reviews=[

{
image:client1,
name:"John Williams",
company:"ABC Bank",
review:"The team delivered an outstanding digital banking platform with excellent quality and support."
},

{
image:client2,
name:"Sophia Martin",
company:"HealthCare Plus",
review:"Professional developers who helped us modernize our healthcare applications."
},

{
image:client3,
name:"David Miller",
company:"Retail Hub",
review:"Highly recommended technology partner for enterprise digital transformation."
}

];

return(

<>

<Navbar/>

<section className="testimonial-section py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>

Client Testimonials

</h2>

<p>

What our global customers say

</p>

</div>

<div className="row">

{

reviews.map((item,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="testimonial-card">

<img
src={item.image}
className="testimonial-img"
alt=""
/>

<h4>

{item.name}

</h4>

<h6>

{item.company}

</h6>

<p>

"{item.review}"

</p>

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

export default Testimonials;