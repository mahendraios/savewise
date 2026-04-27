import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TermsofService } from "./components/TermsofService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden flex flex-col items-center">
      <ScrollToTop />
      {/* Background Effects */}
      <div className="bg-aurora"></div>
      <div className="mesh-grid opacity-60"></div>
      
      {/* Radial fade for the grid fading into the dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,transparent_20%,#030303_100%)] z-[-1]"></div>

      {/* Foreground gradient blur to match image style */}
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] bg-teal-600/20 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-center mt-20 px-4 z-10 relative text-center">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Contact />
            </>
          } />
          <Route path="/terms" element={<TermsofService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;
