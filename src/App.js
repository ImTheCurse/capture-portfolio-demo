import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./comp/GlobalStyle";
import Nav from "./comp/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route, useLocation} from 'react-router-dom'
import MovieDetail from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      
      <Nav/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path = "/" element = {<AboutUs/>}></Route>
          <Route exact path = "/Work" element = {<OurWork/>}></Route>
          <Route exact path = "/Work/:id" element = {<MovieDetail/>}></Route>
          <Route exact path = "/Contact" element = {<ContactUs/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
