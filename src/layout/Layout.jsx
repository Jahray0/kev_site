//Routes dom
import { Routes, Route } from "react-router-dom";
import "./Layout.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
//!= pages
import Home from "../pages/Home";
import Activitees from "../pages/Activitees";
import ContactForm from "../pages/ContactForm";
import QuiSuisJe from "../pages/QuiSuisJe";
//Header + footer (présent sur toutes les pages))
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Navbar />
      <div className="page_active">
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Activitees" element={<Activitees />} />
          <Route path="/QuiSuisJe" element={<QuiSuisJe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
