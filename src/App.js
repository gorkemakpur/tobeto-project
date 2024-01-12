import "./App.css";
import Navi from "./components/Navbar/Navi";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
    <Navi />
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<Platform />} />
 
      </Routes>
      
      <Footer/>
      </>
  );
}

export default App;
