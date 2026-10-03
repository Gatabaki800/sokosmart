import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Upload from "./pages/Upload.jsx"
import Logout from "./pages/Logout.jsx"
import './App.css'
import './components/Navbar.css'



export default function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}