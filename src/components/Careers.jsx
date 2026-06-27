import Navbar from "./Navbar";
import Footer from "./Footer";

function Careers(){

const jobs=[

"React Developer",

"Java Full Stack",

"Cloud Engineer",

"Data Engineer",

"QA Engineer",

"DevOps Engineer"

];

return(

<>

<Navbar/>

<section className="py-5 mt-5">

<div className="container">

<div className="section-title">

<h2>Careers</h2>

<p>Join our growing global team.</p>

</div>

<div className="row">

{

jobs.map((job,index)=>(

<div className="col-lg-4 mb-4" key={index}>

<div className="career-card">

<h4>{job}</h4>

<p>Experience : 0 - 2 Years</p>

<button className="btn btn-primary">

Apply

</button>

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

export default Careers;