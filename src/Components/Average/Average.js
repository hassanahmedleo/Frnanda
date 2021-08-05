import React, { PureComponent, useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import { TiSocialYoutube } from "react-icons/ti"
import { GrFacebookOption } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa"
import { ImPinterest } from "react-icons/im"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Average.css"

const Average = () => {
  const [item, setItem] = useState();
  const handleClose = () => setItem(true);
  return (
    <>
      <div className="container-fluid pic" style={{ padding: '0px' }}>
        <div className="main_class">
          <div>
            <h3 className="marq">FERNANDA MARQUES</h3>
          </div>


          {/* center work */}


          <div className="center_div1">
            <div className="center_text" >ON THE MEDIA</div><br /><br />

            <div>
              <button className="button_press press" onClick={handleClose}>PRESS RELEASE</button>

              <Link to="/national" ><button className="button_press national">NATIONAL</button></Link>
              <Link to="/international"> <button className="button_press international">INTERNATIONAL</button> </Link>
            </div>

          </div>

          <div className="content">
            <div className="average_icons">
              <span className="outer_icon"> <TiSocialYoutube className="facebook" onClick={() => window.location.href = "http://www.youtube.com"} /></span>
              <span className="outer_icon"><GrFacebookOption className="facebook" onClick={() => window.location.href = "http://www.facebook.com"} /></span>
              <span className="outer_icon" ><FaLinkedinIn className="facebook" onClick={() => window.location.href = "http://www.linkedin.com"} /></span>
              <span className="outer_icon"> <ImPinterest className="facebook" onClick={() => window.location.href = "http://www.pinterest.com"} /></span>
              <span className="outer_icon"> <FaInstagram className="facebook" onClick={() => window.location.href = "http://www.instagram.com"} /></span>
            </div>
          </div>

        </div>
 

        <Modal
      // {...props}
      show={item}
          onHide={() => setItem(false)}
          size="xd"
          centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Press Release
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
         
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
         
         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
         consectetur ac, vestibulum at eros.
       </p>
       <p>
         
         lorem ipsum 
       </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
      </div>
    </>
  )
}

export default Average;