import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { Animated } from "react-animated-css";

class ContactUsComponent extends Component {
    render(){
        return(
           <div className='contact'> 
                <Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
                    <Button className={this.props.cname} variant={this.props.variant}>{this.props.buttonText}</Button>
                </Animated>
            
            </div>
        )
    }
}


export default ContactUsComponent;