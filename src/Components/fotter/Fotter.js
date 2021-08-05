import React, { PureComponent } from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {TiSocialYoutube} from "react-icons/ti"
import {GrFacebookOption} from "react-icons/gr"
import {FaLinkedinIn} from "react-icons/fa"
import {ImPinterest} from "react-icons/im"
import {FaInstagram} from "react-icons/fa"
import "./Fotter.css"


const Fotter = () =>{
     return(
         <>
             <div className="container-fluid main">
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Row>
                        <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                            <Link to="/residential">
                            <button className="portuges">PORTUGUÊS</button>  
                            </Link>
                        </Col>
                        <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                            <p className="para">Fernanda Marques Arquitetos Associados. All rights reserved.</p>
                        </Col>
                    </Row>

                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12} className="hovers">


                    <div className="icons_fotter">   

      <FaInstagram className="insta"  onClick={()=>window.location.href="http://www.instagram.com"}/>
      <ImPinterest className="insta"  onClick={()=>window.location.href="http://www.pinterest.com"}/>
      <FaLinkedinIn className="insta"  onClick={()=>window.location.href="http://www.linkedin.com"}/>
      <GrFacebookOption className="insta"  onClick={()=>window.location.href="http://www.facebook.com"}/>
      <TiSocialYoutube className="insta" onClick={()=>window.location.href="http://www.youtube.com"}/>



      </div>
                    </Col>
                </Row>


             </div> 
              

         </>
     )
}

export default Fotter;