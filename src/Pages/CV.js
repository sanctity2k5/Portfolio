import React, { Component } from 'react';
import "../PageCss/CV.css";
import { Image } from "react-bootstrap";

import NavItems from '../Components/NavItems';
import Img from '../Portfolios/wave.png';
import Header from '../Components/Header';
import myPhoto from "../Portfolios/background-cut.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CV extends Component {
    render() {
        return (
            <div className='myCv'>
                <NavItems />

                <Image

                    src={Img}
                    fluid
                    id="cv-background"

                />


            

                <Col>

                <Header
                    cvTitle="Anyadi Onyekachukwu"
                    cvEmail= "SOFTWARE DEVELOPER"
                    cvTel= "TEL: +2348106338171"
                    myPhoto={myPhoto}
                    id="cvImage"
                />

                </Col>

                <Row>
                

                <Col lg ={6}> 
                

</Col>

</Row>  

















                

<head><title>My CV </title></head>
<h1><b> Hafiz Manzoor Ahmad </b></h1>
<address> ma923004274403@gmail.com</address>
<h2>CAREER OBJECT:</h2>
Want to be the part of a software developer organization and utilize my knowledge,Skills
and expertise to contribute<br/> towards organization and professional
brilliance and to learn more with the passage of time from all<br/>
types of situations and circumstances.
<h2>EDUCATION AND QUALIIFICATIONS:</h2>
<table border="2" cellspacing="5" cellpadding="5" >
<tr>
    <th>Qualification</th>
    <th>Maximun Marks</th>
    <th>Obtained Marks</th>
    <th>Division</th>
    <th>Institution</th>
    <th>Bord/University</th>
</tr>
<tr>
    <td>MCS in progress</td>
    <td>-----</td>
    <td>-----</td>
    <td>None</td>
    <td>KFUEIT, RYK</td>
    <td>University </td>
</tr>
<tr>
    <td>BSC</td>
    <td>800</td>
    <td>613</td>
    <td>A</td>
    <td>Khwaja Freed P/G college, RYK </td>
     <td>IUB </td>
</tr>
<tr>
    <td>ICs</td>
    <td>1100</td>
    <td>661</td>
    <td>A</td>
    <td>Khwaja Freed P/G college, RYK </td>
    <td>BWP Board </td>
</tr>
<tr>
    <td>MATRIC</td>
    <td>1050</td>
    <td>763</td>
    <td>A</td>
    <td>Govt. Tameer-e-Millat H/S, RYK</td>
    <td>BWP Board </td>
</tr>
</table>
<h2>TECHNICAL EXPERIENCE:</h2>

      Languages:                  C, C++, JAVA, HTML <br/>
      Platforms:                  Windows Seven, Linux <br/>
      Concepts:                   Networking, operating systems
<h2>ABILITIES:</h2>
      Skill Level :                 MS Word, MS Excel, Power point <br/>
      practiced :                  More than 1 years
<h2>PERSONAL SKILLS:</h2>
                                  1.Honesty<br/>
                                  2.Team Spirit<br/>
                                  3.Accepting Challenges
<h2>LANGUAGES:</h2>
                                  Urdu,English               
<h2>INTEREST:</h2>
                                  1.Internet browsing
                                  2.Reading books
<h2>REFERENCE:</h2>
                                Will be provided on demand
 
            </div>
        )
    }
}





















export default CV;