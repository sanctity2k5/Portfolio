import React, {Component} from 'react';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';


class AboutItems extends Component{
    render(){
        return(
            <div className = "about">
            <table width = "100%">
            <td bgcolor = "#eee" width = "100" height = "200">
                <img id = "about-img" src= {this.props.img} alt = "my-img" /> 
            </td>
             <BeenhereSharpIcon id = "info"/>
                
                <tr valign = "top">
                <td bgcolor = "#aaa" width = "50">

                <tr>
                    <td colspan = "2" bgcolor = "#000">
                        <h3 id = "about-text">About Me!</h3>
                    </td>
                </tr>
            </td>
            </tr>
            </table>

                                        {/* About me Write-up */}
            
            <div id = "about-words">
            <b>Dedicated full-stack web developer with three years of experience in frontend development.
            Proficient use of React.js framework for frontend and Mongodb for backend.
             Strong creative and analytical skills. 
                    Team player with an eye for detail. React and Mongodb.
                </b>
            </div>
            
            
           

            </div>
        )
    }
}



export default AboutItems;