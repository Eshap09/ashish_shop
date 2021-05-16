import React, { useState } from "react";
import "./Tmt.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
import Report from "./Report";
function Tmt() {

    const[bamt,setbamt]=useState();
    const[diff,setdiff]=useState();
    const [show,setshow]=useState(false);
    const [item,setitem]=useState("Select Item");
    const total=()=>{
        setshow(true);    
    }
    
    const angles=[{it:'G6mm', dif:1500},{it:'G8mm', dif:1000},{it:'G10mm', dif:0},{it:'G12mm',dif:0},{it:'G16mm',dif:0}];

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
export default Tmt;
