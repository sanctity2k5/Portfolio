import React, { Component } from 'react';
import WebTechItems from './WebTechItems';
import htmlImg from '../Portfolios/html css js.jpeg';
import reactImg from '../Portfolios/React.png';
import materialImg from '../Portfolios/Material Ui.png';
import bootstrapImg from '../Portfolios/bootstrap-stack.png';
import mernImg from '../Portfolios/Mern.jpeg';
import apiImg from "../Portfolios/What-is-an-API.png";
import githubImg from "../Portfolios/github.png";
import responsiveImg from "../Portfolios/responsive.jpeg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';





const webTechs = [
    { img: htmlImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: reactImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: materialImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: bootstrapImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: mernImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: apiImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: githubImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },
    { img: responsiveImg, cardText: "Over two years of experience and proficiency in the use of Html, Css and JavaScript", id: "card-img", },

    
]




class WebTech extends Component {
    render() {
        return (


            <div className='webTechArea'>

                <Row>

                    <Col className="webTechTitle">

                        <div className="webTechIcons">
                            <h3 className="webTechTitle">
                                <SettingsOutlinedIcon id="webTechIconOne" />
                                Web Technologies
                                <SettingsOutlinedIcon id="webTechIconTwo" />
                            </h3>
                        </div>

                    </Col>
                </Row>


                <Row className='card-groups'>



                    {webTechs.map((webTech, index) => {
                        return <WebTechItems {...webTech} key={index} />
                    })}
                </Row>







            </div>






        )
    }
}


export default WebTech;