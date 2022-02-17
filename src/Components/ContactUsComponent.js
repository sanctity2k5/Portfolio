import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { Animated } from "react-animated-css";
import {Link} from "react-router-dom";

class ContactUsComponent extends Component {
    render(){
        return(
           <div className='contact'> 
                <Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
                <Link to = {"/contactus"}>
                    <Button className={this.props.cname} variant={this.props.variant}>{this.props.buttonText}</Button>
                    </Link>
                </Animated>
            
            </div>
        )
    }
}


export default ContactUsComponent;