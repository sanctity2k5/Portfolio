import React, {Component} from 'react';
import BeenhereSharpIcon from '@material-ui/icons/BeenhereSharp';
import TextAnimation from 'react-animate-text';



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
                        <h3 id = "about-text">{this.props.aboutTitle}</h3>
                    </td>
                </tr>
            </td>
            </tr>
            </table>

                                        {/* About me Write-up */}
            
            <div id = "about-words">
            <TextAnimation charInterval = "0">
            <b>{this.props.aboutWriteUp}</b>
                </TextAnimation>
            </div>

            
            
            
           

            </div>
        )
    }
}



export default AboutItems;