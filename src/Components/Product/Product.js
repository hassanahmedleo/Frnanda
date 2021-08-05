import React, {useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Navbars from "../English/Navbar"
import Fotter from "../fotter/Fotter"
import product1 from "../../images/product1.jpg"
import product2 from "../../images/product2.jpg"
import product3 from "../../images/product3.jpg"
import product4 from "../../images/product4.jpg"
import product5 from "../../images/product5.jpg"
import product6 from "../../images/product6.jpg"
import "./Product.css"
function Product() {
    
    const [data, setData] = useState([{text:"Infinity Washbasin  Collection" , img:product1},{text:"Infinity Washbasin Collection" , img:product2},{text:"Infinity Washbasin Collection" , img:product3}
    ,{text:"Infinity Washbasin Collection" , img:product4},{text:"Infinity Washbasin Collection" , img:product5},{text:"Infinity Washbasin Collection" , img:product6}])
     
    const show_text = (e) =>{
        const element = document.getElementById("a_body");
        element.setAttribute("class", "t_hover")
        
      }
      const hide_text = (e) =>{ 
        const element = document.getElementById("a_body");
        element.setAttribute("class", "t_leave")
        
      }
    return (
        <>
    <Navbars/>

    <br/><br/>
    <br/><br/> 
    <br/><br/>

    <div className="height">
        <Row className="row_margin">
        {data.map((dat )=>(
             <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
               <div className="main_image">
                <img className="product_image " src={dat.img} />
                <div onMouseLeave={() =>hide_text()} onMouseEnter={()=>show_text()}  className="first_text">
                <p className="text_product">{dat.text}</p>
                <span className='view'>- view -</span></div>
</div>
            </Col>
            )  )}

            {/* <div class = "row"> */}
      {/* <a href = "#" class = "column col-xs-6" id = "caption"><span class = "text"><h1>Thunder</h1></span><img src ={dat.img}/> */}
      {/* <div className="main_image"></div> */}
      {/* </a> */}
      {/* <div class = "frame col-xs-6">
      <img src = "https://pbs.twimg.com/profile_images/378800000601617732/9e87878ffdd67333ac8b81f9da22696a_400x400.jpeg" />
      <div class = "details">
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam</p>
      </div>
      
    </div>
     */}
    

            {/* <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
                <div  className="main_image">
                <img className="product_image" src={product2}  />
                </div>
            </Col>
            <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
            <div className="main_image">
                <img className="product_image" src={product3}  />
                </div>
            </Col>
            <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
            <div className="main_image">
                <img className="product_image" src={product4}  />
                </div>
            </Col>
            <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
            <div className="main_image">
                <img className="product_image" src={product5}  />
                </div>
            </Col>
            <Col xl={4} lg={3} md={6} sm={12} xs={12}  className="main_column">
            <div className="main_image">
                <img className="product_image" src={product6}  />
                </div>
            </Col> */}

        </Row>
    </div>
    <Fotter/>
            
        </>
    )
}

export default Product
