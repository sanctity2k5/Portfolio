import React, {Component} from 'react'; 
import "../PageCss/Diary.css";

import Pagination from 'react-bootstrap-4-pagination';
import imgOne from "../Portfolios/ade.jpg";
import Ratio from 'react-bootstrap/Ratio';
import Vid from "../Portfolios/background.mp4";
import imgTwo from "../Portfolios/ade.jpg";
import imgThree from "../Portfolios/ade.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../Components/Footer';
import ContactMe from '../Components/ContactUsComponent';



var date = new Date().toDateString();



class DiaryItem extends Component {
     render(){
        return(
           <div className='dairy-main'> 

           <h1 className = "date">{date}</h1>

    <div className='imgOne'>
      <img src={imgOne} id='imgOne' alt = "ActivityOne" width="80%"/>
      </div>

      <p className='actText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

     <Row>
      <Col className='vid' style={{ width: 1000, height: 'auto' }}>
  <Ratio aspectRatio="16x9">
    <embed type="video/mp4" src={Vid}  frameborder="0"/>
  </Ratio>
  <h3 className='vidTitle'>Daily Activity</h3>

</Col> 
</Row> 

 <p className='actText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


      <Row>
          <Col lg = {6}>
          <img src={imgTwo} id='img' alt = "ActivityyOne" width="80%"/>
          </Col>
          <Col lg = {6}>
          <img src={imgThree} id='img' alt = "ActivityyOne" width="80%"/>
          </Col>
      </Row>

      <Pagination
        circle
        threeDots
        prevNext={true}
        totalPages={22}
        currentPage={1}
        showMax={5}
        activeBgColor="orange"
        activeBorderColor="#ffff"
        bgColor="orange"
        borderColor="#fffff"
        disabledBgColor="#ffffff"
        disabledBorderColor="#000"
        color="#fff"
        className = "pagination"
      />

        
      <ContactMe
            showButton={true}
              buttonText="Contact Me"
              cname="contactMe"
              link="/contactUs"
              variant="primary"
             />     
      <Footer />
           
            </div>
        )
    }
}


export default DiaryItem;