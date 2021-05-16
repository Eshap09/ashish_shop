import React, { useState } from "react";
import "./Angle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
function Angle() {

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

    const angles=[{it:'A25x3', dif:5800},{it:'A32x3', dif:5500},{it:'A35x5', dif:5200},{it:'A40x5',dif:5000},{it:'A50x5',dif:4400},{it:'A65x5',dif:4400}];

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
        {show && <h3 className="value">Rs= {((bamt+diff+250)*1.18+2500)}</h3> }     
   </div>
   
   </form>

    
    )
} 
export default Angle;
