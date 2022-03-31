import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


class Icons extends Component {
    render() {
        return (
            <div>
        <Row>
                  
        <Col lg = {6} className = "bulb-1">
                    <FontAwesomeIcon icon={faLightbulb} rotation={180} color = "orange" size="10x"/>
                    <FontAwesomeIcon icon={faLightbulb}  color = "orange" size="5x"/>
                    </Col>

                    <Col lg = {3} className = "bulb-2">
                    <FontAwesomeIcon icon={faLightbulb} rotation={180} color = "orange" size="5x"/>
                    <FontAwesomeIcon icon={faLightbulb}  color = "orange" size="8x"/>
                    </Col>

                    <Col lg = {6} className = "bulb-3">
                    <FontAwesomeIcon icon={faLightbulb} rotation={180} color = "orange" size="5x"/>
                    <FontAwesomeIcon icon={faLightbulb}  color = "orange" size="8x"/>
                    </Col>

                    <Col lg = {3} className = "bulb-4">
                    <FontAwesomeIcon icon={faLightbulb} rotation={180} color = "orange" size="5x"/>
                    <FontAwesomeIcon icon={faLightbulb}  color = "orange" size="8x"/>
                    </Col>
                    
                    </Row>

 
            </div>
        )
    }
}





















export default Icons;