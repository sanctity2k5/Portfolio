import React, {Component} from 'react';
import {Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div>
            {/* <div className = "background" style = {{backgroundImage:`url(${this.props.image})`}}></div> */}
                <div className = "header">{this.props.title}</div>
                <div className = "sub-header">{this.props.subtitle}</div>
                {this.props.showButton && 
                <Link className="btn" to = "/about">{this.props.buttonText}</Link>}
            </div>
        )
    }
}



export default Header;