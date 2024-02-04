import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';

import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";
import Register from "./components/Signup";
import scrollreveal from "scrollreveal";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                
              <ScrollToTop />
    <Navbar /> 
    <Recommend />
<div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                           <Route path = "/login-employee/:id" component = {LoginComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                            
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
    <Hero />
    <Services />
    
    <Testimonials />
    
    
    
              
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
