import React, {Component} from 'react';
import AboutItems from '../Components/AboutItems';
import img from '../Portfolios/background-cut.png';


class About extends Component{
    render(){
        return(
            <div>
            <AboutItems 
                img = {img}
                aboutTitle = "ABout Me!"
                aboutWriteUp = "Dedicated full-stack web developer with three years of experience in frontend development. Proficient use of React.js framework for frontend and Mongodb for backend. Strong creative and analytical skills."
                />
            

            </div>
        )
    }
}



export default About;