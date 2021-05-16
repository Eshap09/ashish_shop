import React, { useState } from "react";
import "./Pipes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Input } from "@material-ui/core";
import { Button } from "react-bootstrap";
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
    const handleitem2=(e)=>{
        setitem2(e);
        if(item==="Circle/Square")
        {
          for(let i=0;i<squares.length;i++)
          {
            if(squares[i].it===item1 && squares[i].weight===e)
            setdiff(squares[i].dif);
          }
        }
        else
        {
          for(let i=0;i<rectangles.length;i++)
          {
            if(rectangles[i].it===item1 && rectangles[i].weight===e)
            setdiff(rectangles[i].dif);
          }
        }
    }

    const squares=[{it:'0.75inch',weight:'5kg',dif:4800},{it:'0.75inch',weight:'6kg',dif:3600},{it:'0.75inch',weight:'7kg',dif:3000},
                  {it:'1inch',weight:'6kg',dif:3800},{it:'1inch',weight:'7.5kg',dif:2600},{it:'1inch',weight:'9.5kg',dif:2000},{it:'1inch',weight:'10.5kg',dif:2000},
                  {it:'1.25inch',weight:'7.5kg',dif:3300},{it:'1.25inch',weight:'8.5kg',dif:2700},{it:'1.25inch',weight:'9.5kg',dif:2100},{it:'1.25inch',weight:'12.5kg',dif:1500},
                  {it:'1.25inch',weight:'15.5kg',dif:1300},{it:'1.25inch',weight:'17.5kg',dif:1300},{it:'1.5inch',weight:'9kg',dif:2800},{it:'1.5inch',weight:'11.5kg',dif:1600},
                  {it:'1.5inch',weight:'12.5kg',dif:1400},{it:'1.5inch',weight:'14kg',dif:1000},{it:'1.5inch',weight:'17.5kg',dif:800},{it:'1.5inch',weight:'20kg',dif:800},{it:'1.5inch',weight:'22kg',dif:1000},
                  {it:'2inch',weight:'11kg',dif:3000},{it:'2inch',weight:'12.5kg',dif:2400},{it:'2inch',weight:'14kg',dif:1800},{it:'2inch',weight:'16kg',dif:1600},{it:'2inch',weight:'18kg',dif:1200},
                  {it:'2inch',weight:'20kg',dif:1000},{it:'2inch',weight:'22kg',dif:1000},{it:'2inch',weight:'24kg',dif:1000},{it:'2inch',weight:'28kg',dif:1000},
                  {it:'3inch',weight:'27kg',dif:3900},{it:'3inch',weight:'33kg',dif:3500},{it:'3inch',weight:'40kg',dif:3500},{it:'3inch',weight:'45kg',dif:3500}
                ]
  
    const rectangles=[{it:'42x22',weight:'7.5kg',dif:3700},{it:'42x22',weight:'8.5kg',dif:3100},{it:'42x22',weight:'9.5kg',dif:2500},{it:'42x22',weight:'12.5kg',dif:1900},
                      {it:'50x25',weight:'9kg',dif:2800},{it:'50x25',weight:'11.5kg',dif:1600},{it:'50x25',weight:'12.5kg',dif:1400},{it:'50x25',weight:'14kg',dif:1000},{it:'50x25',weight:'17.5kg',dif:800},{it:'50x25',weight:'20kg',dif:800},
                      {it:'50x25',weight:'22kg',dif:1000},{it:'68x25',weight:'12.5kg',dif:2800},{it:'68x25',weight:'14kg',dif:2200},{it:'68x25',weight:'16kg',dif:2000},
                      {it:'68x25',weight:'18kg',dif:1600},{it:'68x25',weight:'20kg',dif:1400},{it:'80x40',weight:'18kg',dif:2600},{it:'80x40',weight:'23kg',dif:2000},
                      {it:'80x40',weight:'30kg',dif:1600},{it:'95x25',weight:'23kg',dif:2400},{it:'96x48',weight:'27kg',dif:3900},{it:'96x48',weight:'27kg',dif:3900},
                      {it:'96x48',weight:'33kg',dif:3500},{it:'96x48',weight:'40kg',dif:3500},{it:'96x48',weight:'45kg',dif:3500}
                ]


  return (

    <form className="form">
    <div className="form__top">
    <h2>Choose item</h2>      
    <DropdownButton alignRight title={item} id="dropdown-menu-align-right" onSelect={handleitem}>
     <Dropdown.Item eventKey="Circle/Square">Circle/Square</Dropdown.Item>
     <Dropdown.Item eventKey="Rectangle">Rectangle</Dropdown.Item>
   </DropdownButton>
   </div>
    <div className="form__extend">
       <h3>   Type   </h3> 
   { item =="Circle/Square" ?
    <DropdownButton alignRight title={item1} id="dropdown-menu-align-right" onSelect={handleitem1}>
     <Dropdown.Item eventKey="0.75inch">0.75inch</Dropdown.Item>
     <Dropdown.Item eventKey="1inch">1inch</Dropdown.Item>
     <Dropdown.Item eventKey="1.25inch">1.25inch</Dropdown.Item>
     <Dropdown.Item eventKey="1.5inch">1.5inch</Dropdown.Item>
     <Dropdown.Item eventKey="2inch">2inch</Dropdown.Item>
     <Dropdown.Item eventKey="3inch">3inch</Dropdown.Item>
     <Dropdown.Item eventKey="4inch">4inch</Dropdown.Item>
   </DropdownButton>
   :
   <DropdownButton alignRight title={item1} id="dropdown-menu-align-right" onSelect={handleitem1}>
   <Dropdown.Item eventKey="42x22">42x22</Dropdown.Item>
   <Dropdown.Item eventKey="50x25">50x25</Dropdown.Item>
   <Dropdown.Item eventKey="68x25">68x25</Dropdown.Item>
   <Dropdown.Item eventKey="80x40">80x40</Dropdown.Item>
   <Dropdown.Item eventKey="95x25">95x25</Dropdown.Item>
   <Dropdown.Item eventKey="96x48">96x48</Dropdown.Item>
 </DropdownButton>
    }
    </div>
    <div className="form__square">
        <h4>Weight</h4>
        {item=="Circle/Square" && item1==="0.75inch" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="5kg">5kg</Dropdown.Item>
            <Dropdown.Item eventKey="6kg">6kg</Dropdown.Item>
            <Dropdown.Item eventKey="7kg">7kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Circle/Square" && item1==="1inch" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="6kg">6kg</Dropdown.Item>
            <Dropdown.Item eventKey="7.5kg">7.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="9.5kg">9.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="10.5kg">10.5kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Circle/Square" && item1==="1.25inch" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="7.5kg">7.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="8.5kg">8.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="9.5kg">9.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="15.5kg">15.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="17.5kg">17.5kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Circle/Square" && item1==="1.5inch" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="9kg">9kg</Dropdown.Item>
            <Dropdown.Item eventKey="11.5kg">11.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="14kg">14kg</Dropdown.Item>
            <Dropdown.Item eventKey="17.5kg">17.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="20kg">20kg</Dropdown.Item>
            <Dropdown.Item eventKey="22kg">22kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Circle/Square" && item1==="2inch" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="11kg">11kg</Dropdown.Item>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="14kg">14kg</Dropdown.Item>
            <Dropdown.Item eventKey="16kg">16kg</Dropdown.Item>
            <Dropdown.Item eventKey="18kg">18kg</Dropdown.Item>
            <Dropdown.Item eventKey="20kg">20kg</Dropdown.Item>
            <Dropdown.Item eventKey="22kg">22kg</Dropdown.Item>
            <Dropdown.Item eventKey="24kg">24kg</Dropdown.Item>
            <Dropdown.Item eventKey="28kg">28kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Circle/Square" && (item1==="3inch"||item1==="4inch") &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="27kg">27kg</Dropdown.Item>
            <Dropdown.Item eventKey="33kg">33kg</Dropdown.Item>
            <Dropdown.Item eventKey="40kg">40kg</Dropdown.Item>
            <Dropdown.Item eventKey="45kg">45kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="42x22" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="7.5kg">7.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="8.5kg">8.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="9.5kg">9.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="50x25" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="9kg">9kg</Dropdown.Item>
            <Dropdown.Item eventKey="11.5kg">11.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="14kg">14kg</Dropdown.Item>
            <Dropdown.Item eventKey="17.5kg">17.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="20kg">20kg</Dropdown.Item>
            <Dropdown.Item eventKey="22kg">22kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="68x25" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="12.5kg">12.5kg</Dropdown.Item>
            <Dropdown.Item eventKey="14kg">14kg</Dropdown.Item>
            <Dropdown.Item eventKey="16kg">16kg</Dropdown.Item>
            <Dropdown.Item eventKey="18kg">18kg</Dropdown.Item>
            <Dropdown.Item eventKey="20kg">20kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="80x40" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="18kg">18kg</Dropdown.Item>
            <Dropdown.Item eventKey="23kg">23kg</Dropdown.Item>
            <Dropdown.Item eventKey="30kg">30kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="95x25" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="23kg">23kg</Dropdown.Item>
          </DropdownButton>
        }
        {item=="Rectangle" && item1==="96x48" &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            <Dropdown.Item eventKey="27kg">27kg</Dropdown.Item>
            <Dropdown.Item eventKey="33kg">33kg</Dropdown.Item>
            <Dropdown.Item eventKey="40kg">40kg</Dropdown.Item>
            <Dropdown.Item eventKey="45kg">45kg</Dropdown.Item>
          </DropdownButton>
        }
        { showw &&
            <DropdownButton alignRight title={item2} id="dropdown-menu-align-right" onSelect={handleitem2}>
            </DropdownButton>
        }
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
export default Pipes;
