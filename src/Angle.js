import React, { useState } from "react";
import "./Angle.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
import Report from "./Report";
function Angle() {

    const[bamt,setbamt]=useState();
    
    const [show,setshow]=useState(false);
    
    const total=()=>{
        setshow(true);    
    }
    

    const angles=[{it:'A25x3', dif:5800},{it:'A32x3', dif:5500},{it:'A35x5', dif:5200},{it:'A40x5',dif:5000},{it:'A50x5',dif:4400},{it:'A65x5',dif:4400}];

  return (
    <form className="form">
       <div className="formm">
       <h4>Basic price</h4>
       <Input placeholder="Enter amount" className="form__basicinput" type="number" value={bamt} onChange={e=>setbamt(+e.target.value)}/>
       <div classname="form__last">
       <Button variant="success" onClick={total}>Show All</Button>   
       </div>
       </div>
    <div className="table_format">
    {show && <div className="table">
    <h5>Item</h5>
    <h5>Difference</h5>
    <h5>Amount</h5>
    </div>   
}
    {show && angles.map(ang=>(
         <Report 
          item={ang.it}
          diff={ang.dif}
          price={bamt}
          />
    ))}
    </div>
   </form>

    
    )
} 
export default Angle;
