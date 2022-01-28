import React, {Component} from 'react';
import AboutItems from '../Components/AboutItems';


class About extends Component{
    render(){
        return(
            <div>
            <AboutItems 
                aboutTitle = "About Me!"
                aboutWriteUp = "Dedicated full-stack web developer with three years of experience in frontend development. Proficient use of React.js framework for frontend and Mongodb for backend. Strong creative and analytical skills."
                />
            

            </div>
        )
    }
}



export default About;