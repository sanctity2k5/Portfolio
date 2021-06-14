import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './Pages/Home';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
    <div className="App">
    <Home />
      
    </div>
    </BrowserRouter>
  );
}
}

export default App;
