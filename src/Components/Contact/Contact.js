import React from 'react'
import { Row,Col } from 'react-bootstrap'
import contact from "../../images/contact.jpg"
import Navbars from "../English/Navbar"
import Fotter from "../fotter/Fotter"
import "./Contact.css"
function Contact() {
    return (
        <>
              <Navbars/>
              <br/><br/>
    <br/><br/> 
    <br/><br/> 


              <div className="container whole_div">

              <div>
                  <img className="image_contact" src={contact} />
                 
              </div>
              <div className="para_out"> 
                 <p className="contact_para">Rua Ramos Batista, 198 - Cobertura | CEP 04552-020 | Vila Olímpia - SP | Tel - 11. 3849-3000</p>
                 </div>

              <div className="line">
                  <Row>
                      <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div>  <img className="globe_canvas" src={contact} /></div>
                      </Col>
                      <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="modal_buttons ">
                          
                          <div className="london">  <button className="buton one">CONTACT US - LONDON</button> 
                          <button className="buton two">CONTACT US - LAUSANNE</button>  </div>
                          <div className="lisboa"> <button className="buton three">CONTACT US - LISBOA</button> 
                          <button className="buton four">CONTACT US - SAO PAULO</button>  </div>
                            <div className="fifth"> <button className="buton five">PORTFOLIO</button>  </div>
                            </div>

                            <div className="text_opp">
                            <h2 className="looking">Looking for new oppurtunities?</h2>
                            <p className="bold">trabalheconosco@fernandamarques.com.br</p>
                            </div>
                      </Col>
                  </Row>
              </div>

              </div>
    
    <Fotter/>  
        </>
    )
}

export default Contact
