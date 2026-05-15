import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import Submit from "./components/submit";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Hero  setIsAuthenticated={setIsAuthenticated}/>
           <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </Router>
  );
}
export default App;
