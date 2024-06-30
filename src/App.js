

import {FaBars, FaTimes } from "react-icons/fa";
import "./App.css";
import "./component/Home.css";
import "./component/Cars.css"; 
import "./component/Contact.css"; 
import "./component/Blog.css";
import logo from './component/img/logo.png'
import React, { Component, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useSearchParams,
} from "react-router-dom";
import Home from "./component/Home";
import Cars from "./component/Cars";
import Blog from "./component/Blog";
import About from "./component/About";
import Contact from "./component/Contact";



    
   

    
export const  App = () => {
     const [menuOpen, setMenuOpen]= useState(false);



    return (
            <Router>
                <div className="App">
               <div className="imaged">
                            <img className='i1' src={logo}  />
                           
                            </div>
                            <div className="menu" onClick={() => {
                                setMenuOpen(!menuOpen);
                                }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    

                                </div>

                           
                    <ul id="App-header" className={menuOpen ? "open" : ""}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Cars">
                                Cars
                            </Link>
                        </li>
                        <li>
                            <Link to="/Blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                About 
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact">
                                Contact Us
                            </Link>
                        </li>
                      

                        
                    </ul >
                    
                   
                   
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/cars"
                            element={<Cars/>}
                        ></Route>
                        <Route
                            path="/Blog"
                            element={<Blog />}
                        ></Route>
                        <Route
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    
    };
 
export default App;

