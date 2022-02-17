import React, {Component} from 'react'; 
import Header from "../Components/Header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";    
import DiaryPhoto from '../Portfolios/diary.jpg';
import DiaryItem from '../Components/DiaryItem';

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
                 
                 <Header
              
              mainGreet="MY"
              subtitle="DIA"
              subtitleDev="RY"
              visible = {false}
              />


              <DiaryItem /> 

            </div>
        )
    }
}


export default Diary;