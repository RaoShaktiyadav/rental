import "./App.css";
import "./component/Home.css";
import logo from './component/img/logo.jpg'
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
               <div className="imaged">
                            <img className='i1' src={logo}  />
                           
                            </div>
                    <ul className="App-header">
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
                    
                    </ul>
                    
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
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
    }
}

export default App;