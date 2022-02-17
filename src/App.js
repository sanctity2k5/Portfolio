import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";

//Pages
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUS';
import Diary from './Pages/Diary'

class App extends Component{
  render(){
    return (
      
      <Router>
    <div className="App">
    <switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/contactus" component = {ContactUs} />
      <Route exact path = "/diary" component = {Diary} />

    </switch>
    
      
    </div>
    </Router>
  );
}
}

export default App;
