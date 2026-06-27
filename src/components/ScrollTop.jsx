import {useEffect,useState} from "react";

function ScrollTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

if(window.scrollY>300){

setShow(true);

}

else{

setShow(false);

}

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<>

{

show &&

<button
className="scroll-btn"
onClick={top}
>

↑

</button>

}

</>

);

}

export default ScrollTop;