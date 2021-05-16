import React, { useState } from "react";
import "./Angle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
function Tmt() {

    const[bamt,setbamt]=useState();
    const[diff,setdiff]=useState();
    const [show,setshow]=useState(false);
    const [item,setitem]=useState("Select Item");
    const total=()=>{
        setshow(true);    
    }
    
    const handleitem=(e)=>{
        setitem(e);
        let result;
        for(let i=0;i<angles.length;i++)
        {
            if(angles[i].it===e)
            {
                result=angles[i].dif;
            }
        }
        setdiff(result);

    }

    const toggle=()=>{
        setshow(false);
    }

    const angles=[{it:'G6mm', dif:1500},{it:'G8mm', dif:1000},{it:'G10mm', dif:0},{it:'G12mm',dif:0},{it:'G16mm',dif:0}];

  return (

    <form className="form">
    <div className="form__top">
    <h2>Choose item</h2>      
    <DropdownButton alignRight title={item} id="dropdown-menu-align-right" onSelect={handleitem}>
    {angles.map(ang=>(
         
         <Dropdown.Item eventKey={ang.it}>{ang.it}</Dropdown.Item>
    
  ))}
   </DropdownButton>
   </div>
   <div className="form__middle">
       <div className="form__middlefirst">
       <h4>Basic price</h4>
       <Input placeholder="Enter amount" className="form__middleinput" type="number" value={bamt} onChange={e=>setbamt(+e.target.value)}/>
        </div>
        <div className="form__middlefirst">
        <h4>Difference</h4>
        <Input placeholder="Enter difference" className="form__middleinput" type="number" value={diff} onChange={e=>setdiff(+e.target.value)} />   
        </div>
   </div>
   <div classname="form__last">
       <Button variant="success" onClick={total}>Total Amount</Button>
        {show && <h3 className="value" onClick={toggle} > Rs= {((bamt+diff+250)*1.18+2500)}</h3> }     
   </div>
   </form>

    
    )
} 
export default Tmt;
