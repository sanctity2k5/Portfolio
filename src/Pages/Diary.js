import React, {Component} from 'react'; 
import Header from "../Components/Header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image} from "react-bootstrap";    
import DiaryPhoto from '../Portfolios/diary.jpg';
import DiaryItem from '../Components/DiaryItem';
import myPhoto from '../Portfolios/diary-2.png';

import NavItems from '../Components/NavItems';

class Diary extends Component {
    render(){
        return(
           <div className='dairy'> 


<Row>
          <Col>
            <Image

              src={DiaryPhoto}
              fluid
              id="background-img"

            />
            </Col>
            </Row>
            <NavItems />
                 
                 <Header
              
              mainGreet="MY DIARY"
              title = "How much would you love to share in the bits and pieces of my life's journey?"
              visible = {true}
              myPhoto = {myPhoto}
              id = "diary-image"
              />


              <DiaryItem /> 

            </div>
        )
    }
}


export default Diary;