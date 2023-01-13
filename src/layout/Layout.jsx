//Routes dom
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
//!= pages
import Home from "../pages/Home";
import ContactForm from "../pages/ContactForm";
//Header + footer (présent sur toutes les pages))
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Navbar />
      <div className="container">
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
