import React, { Component } from 'react';
import Img from '../Portfolios/background2.jpg';
import { Image } from "react-bootstrap";
import myPhoto from "../Portfolios/background-cut.png";

//Components

import Header from '../Components/Header';
import Links from '../Components/Links';
import About from '../Pages/About';
import WebTech from '../Components/WebTech';
import ContactMe from "../Components/ContactUsComponent";
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
// import image from '../Portfolios/Kachi-logo.jpg';

class Home extends Component {
  render() {
    return (
      <div className = "main-body">
      <Container fluid>




        <Row>
          <Links />

          </Row>


         
          
            <Image

              src={Img}
              fluid
              id="background-img"

            />
           
  


          <div className="button">
            <Header
              showButton={true}
              buttonText="Tell Me More"
              cname="btn button-one"
              link="/About"
              variant="warning"
              mainGreet="Hi,"
              subGreet="I am"
              title="Anyadi Onyekachukwu"
              subtitle="Frontend Web"
              subtitleDev=" Developer"
              myPhoto={myPhoto}
              id = "image"
            />

          </div>
       

    
            <About />
  

        
     
         
            <WebTech />
            <ContactMe
            showButton={true}
              buttonText="Contact Me"
              cname="contactMe"
              link="/contactUs"
              variant="primary"
             />

            <Footer />
         

      

      </Container>
</div>
    )
  }
}



export default Home;