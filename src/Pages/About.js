import React, {Component} from 'react';
import AboutItems from '../Components/AboutItems';
import img from '../Portfolios/background-cut.png';

class About extends Component{
    render(){
        return(
            <div>
            <AboutItems 
                img = {img}
            />

            </div>
        )
    }
}



export default About;