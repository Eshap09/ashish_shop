import React, { useState } from "react";
import "./Pipes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
import Report from "./Report";
function Pipes() {

    const [bamt,setbamt]=useState();
    const [diff,setdiff]=useState();
    const [show,setshow]=useState(false);
    const [item,setitem]=useState("Select Item");
    const [item1,setitem1]=useState("Select ");
    const [item2,setitem2]=useState("select weight");
    const [showw,setshoww]=useState(true);
    const total=()=>{
        setshow(true);    
    }
    
    const handleitem=(e)=>{
        setitem(e);
        setitem1("select");
    }

    const handleitem1=(e)=>{
        setitem1(e);
        setshoww(false);
    }
  
    const squares=[{it:'0.75inch',weight:'5kg',dif:4800},{it:'0.75inch',weight:'6kg',dif:3600},{it:'0.75inch',weight:'7kg',dif:3000},
                  {it:'1inch',weight:'6kg',dif:3800},{it:'1inch',weight:'7.5kg',dif:2600},{it:'1inch',weight:'9.5kg',dif:2000},{it:'1inch',weight:'10.5kg',dif:2000},
                  {it:'1.25inch',weight:'7.5kg',dif:3300},{it:'1.25inch',weight:'8.5kg',dif:2700},{it:'1.25inch',weight:'9.5kg',dif:2100},{it:'1.25inch',weight:'12.5kg',dif:1500},
                  {it:'1.25inch',weight:'15.5kg',dif:1300},{it:'1.25inch',weight:'17.5kg',dif:1300},{it:'1.5inch',weight:'9kg',dif:2800},{it:'1.5inch',weight:'11.5kg',dif:1600},
                  {it:'1.5inch',weight:'12.5kg',dif:1400},{it:'1.5inch',weight:'14kg',dif:1000},{it:'1.5inch',weight:'17.5kg',dif:800},{it:'1.5inch',weight:'20kg',dif:800},{it:'1.5inch',weight:'22kg',dif:1000},
                  {it:'2inch',weight:'11kg',dif:3000},{it:'2inch',weight:'12.5kg',dif:2400},{it:'2inch',weight:'14kg',dif:1800},{it:'2inch',weight:'16kg',dif:1600},{it:'2inch',weight:'18kg',dif:1200},
                  {it:'2inch',weight:'20kg',dif:1000},{it:'2inch',weight:'22kg',dif:1000},{it:'2inch',weight:'24kg',dif:1000},{it:'2inch',weight:'28kg',dif:1000},
                  {it:'3inch',weight:'27kg',dif:3900},{it:'3inch',weight:'33kg',dif:3500},{it:'3inch',weight:'40kg',dif:3500},{it:'3inch',weight:'45kg',dif:3500},{it:'42x22',weight:'7.5kg',dif:3700},{it:'42x22',weight:'8.5kg',dif:3100},{it:'42x22',weight:'9.5kg',dif:2500},{it:'42x22',weight:'12.5kg',dif:1900},
                  {it:'50x25',weight:'9kg',dif:2800},{it:'50x25',weight:'11.5kg',dif:1600},{it:'50x25',weight:'12.5kg',dif:1400},{it:'50x25',weight:'14kg',dif:1000},{it:'50x25',weight:'17.5kg',dif:800},{it:'50x25',weight:'20kg',dif:800},
                  {it:'50x25',weight:'22kg',dif:1000},{it:'68x25',weight:'12.5kg',dif:2800},{it:'68x25',weight:'14kg',dif:2200},{it:'68x25',weight:'16kg',dif:2000},
                  {it:'68x25',weight:'18kg',dif:1600},{it:'68x25',weight:'20kg',dif:1400},{it:'80x40',weight:'18kg',dif:2600},{it:'80x40',weight:'23kg',dif:2000},
                  {it:'80x40',weight:'30kg',dif:1600},{it:'95x25',weight:'23kg',dif:2400},{it:'96x48',weight:'27kg',dif:3900},{it:'96x48',weight:'27kg',dif:3900},
                  {it:'96x48',weight:'33kg',dif:3500},{it:'96x48',weight:'40kg',dif:3500},{it:'96x48',weight:'45kg',dif:3500}
                ]


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
     {show && squares.map(ang=>( 
         <Report 
          item={ang.it}
          diff={ang.dif}
          price={bamt}
          weight={ang.weight}
          />
    ))}
    
    </div>
   </form>

    
    )
} 
export default Pipes;
