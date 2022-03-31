import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Animated } from "react-animated-css";
// import {Link } from "react-router-dom";

import { Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
    render() {
        return (
            <div className="top">
                <Row>


                    <Col lg={6}>
                        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <div className= "main-greet display-3 "><b>{this.props.mainGreet}</b></div>
                            <div className="sub-greet display-3">{this.props.subGreet}</div>
                            <div className="header display-3"><b>{this.props.title}</b></div>
                            <div className="sub-header display-6">{this.props.subtitle}</div>
                            <div className="sub-header-two display-6">{this.props.subtitleDev}</div>
                            <div className= "cv-title"><b>{this.props.cvTitle}</b></div>
                            <div className= "cv-email"><b>{this.props.cvEmail}</b></div>
                            <div className= "cv-tel"><b>{this.props.cvTel}</b></div>
                            
                        </Animated>
                    </Col>


                    <Col  className="my-photo">
                        <Animated animationIn="wobble" animationOut="fadeOut" isVisible={this.props.visible}>
                            <Image src={this.props.myPhoto} alt="Kachi's image" id={this.props.id} fluid />

                        </Animated>

                    </Col>
                   </Row>

                <Row>
                <Col lg = {3} className = "btn-1">
                <Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
                    <Button className={this.props.cname} variant={this.props.variant} showButton={this.props.showButton}>{this.props.buttonText}</Button>
                </Animated>
                    </Col>
                </Row>
            </div>
        )
    }
}



export default Header;