function Clients() {

const companies=[

"Microsoft",

"Google",

"Amazon",

"Oracle",

"IBM",

"Cisco",

"Intel",

"Adobe"

];

return(

<section className="clients">

<div className="container">

<div className="section-title">

<h2>

Trusted By Global Clients

</h2>

<p>

Helping enterprises worldwide.

</p>

</div>

<div className="row">

{

companies.map((item,index)=>(

<div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

<div className="client-card">

{item}

</div>

</div>

))

}

</div>

</div>

</section>

);

}

export default Clients;