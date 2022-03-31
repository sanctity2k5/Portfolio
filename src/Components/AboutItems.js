import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animated } from "react-animated-css";




class AboutItems extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg = {12} className={this.props.info}>
                    <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
                        <this.props.icon id={this.props.iconId} />
                        <div id={this.props.aboutTitleId}>
                            <b>{this.props.aboutTitle}</b>
                        </div>
                        </Animated>
                   
                
                     {/* About me Write-up */}

                   
                    
                    <div id={this.props.aboutId}>
                        <b>{this.props.aboutWriteUp}</b>
                    </div>
                </Col>

                   


                </Row>
            </div>
        )
    }
}



export default AboutItems;