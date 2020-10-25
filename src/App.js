import React from 'react';
import image from './images/ab_1.jpg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from './components/Card.js';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navigation from 'react';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <
    //  className="App"
     >
     <BrowserRouter>
     <div>
       {/* <Navigation /> */}
         <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          {/* <Route path="/contact" component={Contact}/> */}
         <Route component={Error}/>
        </Switch>
     </div> 
   </BrowserRouter>

    </>
  );
}

export default App;
