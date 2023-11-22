import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from 'primereact/calendar';

const Input=()=>{
const [start, setStart]=useState(Date);
const [end, setEnd]=useState(Date);
const navigate=useNavigate()
const f=async()=>{
    const response= await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&start=${start}&end=${end}`)
    const data= await response.json();
    console.log(data)
    navigate("./Cards",{state:{data}})
    
}
    return(
<>
<br></br>
 <label>Start date</label>
<input  onBlur={(e)=>setStart(e.target.value)}></input>
<br></br>
<label>End date</label>
<input  onBlur={(e)=>setEnd(e.target.value)}></input>
<br></br>
<button onClick={()=>f()}>get events</button>
<br></br><br></br><br></br>

 {/* כתוב באתר שזה הפורמט הנכון לתאריך שאת סוגו צריך  */}
<label>Start date</label>
<Calendar dateFormat="yy-mm-dd" onChange={(e)=>setStart(e.target.value)} showButtonBar></Calendar>
<br></br>
<label>End date</label>
<Calendar dateFormat="yy-mm-dd" onChange={(e)=>setEnd(e.target.value)} showButtonBar></Calendar>
<br></br>
<button onClick={()=>f()}>get events</button>
</>
    )


}
export default Input