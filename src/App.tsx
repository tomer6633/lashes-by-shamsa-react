import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import "./index.css";

function Footer() {
  return (
    <footer className="text-center py-5 text-sm px-4" style={{ background: "#150F18", color: "rgba(255,255,255,0.3)" }}>
      © 2025 <span style={{ color: "#B5669A", fontWeight: 600 }}>Lashes by Shamsa</span> — London, ON · 6602 Raleigh Blvd ·{" "}
      <a href="tel:2265038782" style={{ color: "#B5669A" }}>(226) 503-8782</a>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
        <Footer />
        <ContactBar />
      </div>
    </HashRouter>
  );
}
