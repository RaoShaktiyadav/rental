import "./App.css";
import "./component/Home.css";
import "./component/Cars.css"; 
import "./component/Contact.css"; 

import "./component/About.css";
import logo from './component/img/logo.png'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
    
    
} from "react-router-dom";
// import { useState } from "react";
import Home from "./component/Home";
import Cars from "./component/Cars";

import About from "./component/About";
import Contact from "./component/Contact";





    

    
const  App =() => {
  // { onSearch }
  //   const [searchTerm, setSearchTerm] = useState("");
  
  //   const handleInputChange = (e) => {
  //     setSearchTerm(e.target.value);
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSearch(searchTerm);
  //   };  
  
  // const handleSearch = (query) => {
  //   console.log("Searching for:", query);
  //   // Implement the search logic here, e.g., filter data, make API calls, etc.
  // };



    return (
            <Router>
                <div>
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light" >
        <div class="container-fluid">
        <img  src={logo} class="navbar-brand" to="/" alt="img"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Cars">Cars</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
              </li>
             
            </ul>
            <form class="d-flex">
              <input class="form-control me-2"  placeholder="Search..."/>
              <button class="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>



    
      
                   
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/cars"
                            element={<Cars/>}
                        ></Route>
                        {/* <Route
                            path="/Blog"
                            element={<Blog />}
                        ></Route> */}
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

