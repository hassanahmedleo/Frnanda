import React, { PureComponent } from 'react'
// import {Carousel} from "react-bootstrap"
import first from "../../images/first.jpg";
import second from "../../images/second.jpg";
import third from "../../images/third.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";
// import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import "./carousel.css"

function Carousell()

{
  // const {  Carousel  } = antd;
    return(
        <>


        {/* <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={first}
    
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={second}
    
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={third}
     
    />


  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={four}
    
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={five}

    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 image_slide"
      src={six}
 
    />

  </Carousel.Item>
</Carousel> */}


<Carousel  dots={false}  effect="fade" autoplay >
    <div>
    <img
      className="d-block w-100 image_slide"
      src={first}
    
    />
    </div>
    <div>
    <img
      className="d-block w-100 image_slide"
      src={second}
    
    />
    </div>
    <div>
    <img
      className="d-block w-100 image_slide"
      src={third}
    
    />
    </div>
    <div>
    <img
      className="d-block w-100 image_slide"
      src={four}
    
    />

    </div>

    <div>
    <img
      className="d-block w-100 image_slide"
      src={five}
    
    />

    </div>

    <div>
    <img
      className="d-block w-100 image_slide"
      src={six}
    
    />

    </div>

  </Carousel>

        </>
    )
}

export default Carousell;