import Navbar from "./Navbar";
import Footer from "./Footer";

import banking from "../assets/images/products/banking.jpg";
import healthcare from "../assets/images/products/healthcare.jpg";
import retail from "../assets/images/products/retail.jpg";

function Products(){

const products=[

{

title:"Digital Banking",

image:banking

},

{

title:"Healthcare Platform",

image:healthcare

},

{

title:"Retail Commerce",

image:retail

}

];

return(

<>

<Navbar/>

<section className="py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>

Our Products

</h2>

<p>

Enterprise-ready business solutions.

</p>

</div>

<div className="row">

{

products.map((item,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="product-card">

<img
src={item.image}
className="img-fluid"
/>

<div className="p-4">

<h4>

{item.title}

</h4>

<p>

Modern platforms built for
global enterprises.

</p>

<button className="btn btn-primary">

Explore

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

export default Products;