import React, {Component} from 'react';
import AboutItems from '../Components/AboutItems';


class About extends Component{
    render(){
        return(
            <div>
            <AboutItems 
                aboutTitle = "About Me!"
                aboutWriteUp = "I am Anyadi Onyekachukwu C. Dedicated full-stack web developer with three years of experience in frontend development. 
                Proficient use of React.js framework for frontend, Node.js and Express.js for backend and Mongodb for database." />
            

            </div>
        )
    }
}



export default About;