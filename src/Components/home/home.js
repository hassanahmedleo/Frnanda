import React, { PureComponent , useState } from 'react';

import Carousell from './carousel';
import { Link, Redirect } from 'react-router-dom';
import  {Container,Row,Col} from "react-bootstrap"
import "./home.css"
import {TiSocialYoutube} from "react-icons/ti"
import {GrFacebookOption} from "react-icons/gr"
import {FaLinkedinIn} from "react-icons/fa"
import {ImPinterest} from "react-icons/im"
import {FaInstagram} from "react-icons/fa"




const Home = () =>

{
// {const [redirectRes1, setredirectRes1] = useState(false)
//     const redirectRes = ()=> {
//    setredirectRes1(true)
// }
// if(redirectRes1)
// {return <Redirect to="/Residential"/>}
// else
    return(
        <>
        <Carousell />
  

        <div className="container-fluid ">


        <div className="welcome post">
            <p>Welcome</p>
            </div>

    
       <div className="marque">
           <Row>
               <Col xl={12} lg={12} md={12} sm={12} xs={12}>

               <h2 className="marquee_h1">Fernanda Marques Arquitetos Associados</h2>

               <p className="marquee_p">A graduate of the University of São Paulo’s School of Architecture and Urbanism,
                Fernanda Marques’s career is marked by the same conceptual thread that
                 characterized her formative years: integrated exercise of the various disciplines
                  encompassed in a project: Architecture, Interiors and Product Design. The
                   projects conceived in her practice combine this trait, the essence of her style -
                   clean and contemporary - and the best in the world’s art and design.</p>
               

             
                
               </Col>

              
           </Row>
           {/* <Row>
               <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                   <div>
                       <Link>PORTUGUES</Link>
                   </div>
               </Col>
               <Col xl={6} lg={6} md={6} sm={6} xs={12}>
               <div>
                       <Link>ENGLISH</Link>
                   </div>
               </Col>
           </Row> */}


       </div>
 
    {/* links  */}

    
       <div className="links">
       <div className="link_1">
           <Link className="portuguse">PORTUGUÊS</Link>
           
           </div>


           <div className="link_2">
           {/* <a> */}
       {/* <div onClick={()=>redirectRes()}  className="portuguse">ENGLISH</div></a> */}
       <Link to="/Residential" className="portuguse">ENGLISH</Link>
            </div>


           </div>


     {/* icons */}
   
    <div className="icons">   
      <TiSocialYoutube className="youtube" onClick={()=>window.location.href="http://www.youtube.com"}/>
      <GrFacebookOption className="youtube"  onClick={()=>window.location.href="http://www.facebook.com"}/>
      <FaLinkedinIn className="youtube"  onClick={()=>window.location.href="http://www.linkedin.com"}/>
      <ImPinterest className="youtube"  onClick={()=>window.location.href="http://www.pinterest.com"}/>
      <FaInstagram className="youtube"  onClick={()=>window.location.href="http://www.instagram.com"}/>
      </div>

        </div>

      
        </>
    )
}

export default Home;