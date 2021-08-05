import React, { PureComponent } from 'react'
import image_1 from "../../images/about.jpg"
import {Row,Col} from "react-bootstrap"
import Navbars from "../English/Navbar"
import Fotter from "../fotter/Fotter"

import "./About.css"
const About = () =>{
     return(
         <>
       <Navbars />
   <br/> <br/> <br/> <br/>
       <div className="container">
       <div className="main_div">
         <Row>
             <Col xl={6} lg={6} md={12} sm={12} xs={12} className="column_one">
                 <img className="image_one" src={image_1} />
             </Col>
             <Col xl={6} lg={6} md={12} sm={12} xs={12} className="column_one query">
                 <div className="image_two">
                 <h1 className="about_heading">About</h1>
                 <p className="fernanda_marque">FERNANDA MARQUES</p>

                 <p className="about_paragraph">
                 A graduate of the University of São Paulo’s School of Architecture and Urbanism, Fernanda Marques’s career is marked by the same conceptual thread that characterized her formative years: integrated exercise of the various disciplines encompassed in a project: Architecture, Interiors and Product Design. The projects conceived in her practice combine this trait, the essence of her style - clean and contemporary - and the best in the world’s art and design. 
                 </p>
               
                 <p className="about_paragraph">This is seen in the Malibu and Barbizon residences, in São Paulo and New York, as well as in the many ongoing projects in Miami, London and Lisbon. From paradisiacal homes by the sea to real estate developments in major Brazilian cities, to well-established commercial spaces, such as the ones for Ermenegildo Zegna, John John, Le Lis Blanc, L’Occitane and Rosa Chá. Most recently Fernanda has partnered up on hotel development with Accor and Royal Palm Resorts group.</p>
                 <p className="about_paragraph">It is this multidisciplinary attitude, combined with a renewed appetite for the new that makes her an unmatched contender in the domestic scenario.</p>
                 <p className="about_paragraph">Some of the most recent accolades are the four AD Awards she won in Italy, two of which for a furniture design project: the Infinite Stool, in wood and the Geomorph Series in stainless steel; Continuing her line of work, she has developed her research further to create the Organic Steel Series, becoming an Interior Design Best of Year Honoree in the 2013 edition. and also a major winner with four projects at the Property Awards Americas 2013-2014, 2017-2018;</p>
                 <p className="about_paragraph">Praised both by the critics and the public, her participation in design exhibitions such as CasaCor and in the three editions of MostraBlack are fitting illustrations for her trajectory that has a global recognition of her work by the specialized media in several countries.</p>
                 <p className="about_paragraph">Fernanda has been invited to concept a brand new project for the Roca Gallery Brazil which will certainly place the Brazilian edition alongside its international sisters. </p> 
                 <p className="about_paragraph">As an avid art collector and enthusiast, she was recently chosen as member of the Latin American Acquisitions Committee. for the Tate Modern in London.  </p>
                 <p className="about_end">More than designed rooms, these are spaces where Fernanda has expressed her concepts in ancohesive manner, thus becoming a reference for a whole generation of young professionals. </p>



                 </div>
             </Col>
         </Row>
         </div>
       </div>

       <Fotter/>
         </>
     )
}

export default About;