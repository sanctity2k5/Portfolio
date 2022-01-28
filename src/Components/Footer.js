import React, {Component} from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';


class Footer extends Component {
    render(){
        return(
           <div> 
            <div className = "footDiv">
                <p className = "footOne"> "Your website should be the center of your ecosystem, 
                like a brick and motar location, the experience matters once a customer enters, 
                just as much as the perception they have of you before they walk through the door."-Leland Dieno </p>
                <p className = "footFace">  Follow me on: <br/> <FacebookIcon id="face" /><WhatsAppIcon id="what"/></p>

                <p className = "footThree">Powered by me copyright &#169; 2022 <br/> Kachi's Online Office</p>
            </div>
            </div>
        )
    }
}


export default Footer;