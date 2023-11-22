import { useEffect } from "react";
import { useState } from "react";
import { Fieldset } from 'primereact/fieldset';
import { useLocation } from "react-router-dom";
const Cards=()=>{
const[cinfo,setCinfo]=useState([]);
const location=useLocation();
var info=location.state;
useEffect(() => {
       setCinfo(info)
 }, []);
 const parasha=()=>{
    var a=cinfo.data.filter(a=>(a.className==="roshchodesh"))
    console.log(a)
    setCinfo(a)
 }
return(
<>
<h1 style={{textAlign:"center"}}>Events In Range</h1>
<br></br>
<button style={{marginLeft:'47.5%'}} onClick={()=>parasha()}>Parsha</button>  
<button onClick={()=>setCinfo(info)}>All</button> 
<br></br>
<br></br>
 {cinfo.data &&  cinfo.data.map((c) => (
 <Fieldset >
   <h1>{c.title}</h1>
   <p>{c.description}</p>
   {c.start}
  </Fieldset>
 ))} 
  
</>
    )
}
export default Cards