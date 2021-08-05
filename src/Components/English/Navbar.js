import React, { PureComponent,useState } from 'react'
import { Navbar,Nav,NavDropdown,Accordion} from 'react-bootstrap';
import { NavLink ,Link} from 'react-router-dom';
import logo from "../../images/logo.jpg"

import "./Navbar.css"

const Navbars = () =>{
const [show,setShow] = useState(true);
const [accordion,setAccordion] = useState(false);
const show_body = (e) =>{
  const element = document.getElementById("a_body");
  element.setAttribute("class", "ahover")
  
}
const hide_body = (e) =>{ 
  const element = document.getElementById("a_body");
  element.setAttribute("class", "aleave")
  
}
return(
  <nav className="custom_navbar">
  <button className="menu_btn" onClick={() => show?setShow(false):setShow(true)} >MENU</button>
    <div className="navbar_items" style={{display:show?"flex":"none"}}>
    <NavLink exact activeclass="active" to="/" className="topbar_color">HOME</NavLink>
    <NavLink exact activeclass="active" to="/residential" className="topbar_color">RESIDENTIAL</NavLink>
    <NavLink exact activeclass="active" to="/show" className="topbar_color">SHOWCASE</NavLink>
    <NavLink exact activeclass="active" to="/commercial" className="topbar_color">COMMERCIAL</NavLink>
    <NavLink exact activeclass="active" to="/product" className="topbar_color">PRODUCT DESIGN</NavLink>
    <NavLink exact activeclass="active" to="/contact" className="topbar_color">CONTACT</NavLink>
    <NavLink exact activeclass="active" to="/average" className="topbar_color">AVERAGE</NavLink>
  <div className="accordion">
  <NavLink to="/about" activeclass="active" className="ferrari">  <div className="accordion_heading topbar_color" onMouseLeave={() =>hide_body()} onMouseEnter={()=>show_body()} id="accordion" onClick={() => accordion?setAccordion(false):setAccordion(true)} >
    <span className="accordion_icon">{accordion?"-":"+"}</span>FERNANDA</div></NavLink>
    <div className="accordion_body" id="a_body"style={{display:accordion?"flex":"none"}}>
      <NavLink exact  onMouseLeave={() =>hide_body()} onMouseEnter={()=>show_body()} className="accordion_item topbar_color" to="/about">ABOUT</NavLink>
    </div>
  </div>
  
    </div>
    {/* {console.log(item[2])}
    {item[2].id} */}
    <div className="navbar_logo"><img src={logo} /></div>
  </nav>
  
)
}

export default Navbars;


//     <Navbar className="topbar" collapseOnSelect expand="md"  variant="dark">
//   <div className="container-fluid">
  
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto topbar_link">
//       <Nav.Link href="/" className="topbar_color">HOME</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">RESIDENTIAL</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">SHOWCASE</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">COMMERCIAL</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">PRODUCT DESIGN</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">CONTACT</Nav.Link>
//       <Nav.Link href="#pricing" className="topbar_color">AVERAGE</Nav.Link>
//       <Nav.Link className="topbar_color fernanda ">FERNANDA
//       <span className="topbar_color about">ABOUT</span></Nav.Link>
//       {/* <Nav.Link href="#pricing" className="topbar_color "></Nav.Link> */}
 
//       {/* <div class="tooltip">Hover over me
//   <span class="tooltiptext">Tooltip text</span>
// </div> */}
//     </Nav>

//   </Navbar.Collapse>

//   <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
//   </div>
// </Navbar>