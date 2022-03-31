import React, {Component} from 'react';
import AboutItems from '../Components/AboutItems';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';
import Icons from '../Components/Icons';


class About extends Component{
    render(){
        return(
            <div>
            <AboutItems 
                icon = {BeenhereSharpIcon}
                iconId = "info"
                aboutTitle = "About Me!"
                aboutWriteUp = "I am a dedicated full-stack web developer with three years of experience in frontend development. 
                Proficient use of React.js framework for frontend, Node.js and Express.js for backend and Mongodb for database." 
                aboutId = "about-words"
                info = "info"
                aboutTitleId = "about-title"
                />

                <Icons />
               

            </div>
        )
    }
}



export default About;