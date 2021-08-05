import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/home/home";
import Residential from "./Components/English/Residential";
import About from "./Components/About/About";
import Average from "./Components/Average/Average"
import National from "./Components/Average/National"
import International from "./Components/Average/International"
import Show from "./Components/Show/Show"
import Commercial from "./Components/Commercial/Commercial"
import Product from "./Components/Product/Product"
import Contact from "./Components/Contact/Contact"


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
   <>
      <Router>
        <React.Fragment>
         
         
          <Switch>
          <Route exact  path="/" component={Home} />
          <Route path="/Residential" component={Residential} />
          <Route path="/About" component={About} />
          <Route path="/Average" component={Average} />
          <Route path="/National" component={National} />
          <Route path="/International" component={International} />
          <Route path="/Show" component={Show} />
          <Route path="/Commercial" component={Commercial}/>
          <Route path="/Product" component={Product}/>
          <Route path="/Contact" component={Contact}/>
          
 
          </Switch>
        </React.Fragment>
      </Router>

   </>
  );
}

export default App;
