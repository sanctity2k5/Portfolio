import React, {Component} from 'react';
import Video from '../Portfolios/background.mp4';
import poster from '../Portfolios/background-poster.png';

//Components

import Header from '../Components/Header';
import Links from '../Components/Links';

//Pages
import About from '../Pages/About';
// import image from '../Portfolios/Kachi-logo.jpg';

class Home extends Component{
    render(){
        return(
            <div>
             <Links />
             <video poster = {poster} className = "background" src={Video} width="360" height="300" autoPlay />

            <Header 
                showButton= {true}
                 buttonText = "Tell me more"
            />
            <About />
            
           

            </div>
        )
    }
}



export default Home;