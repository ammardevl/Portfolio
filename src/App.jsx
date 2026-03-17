import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "home";
    setCurrentPage(hash);

    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "") || "home";
      setCurrentPage(newHash);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenuOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Content protection
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   const handleCopy = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   const handleKeyDown = (e) => {
  //     if (
  //       e.keyCode === 123 ||
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
  //       (e.ctrlKey && e.keyCode === 85) ||
  //       (e.ctrlKey && e.keyCode === 83) ||
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 67)
  //     ) {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };

  //   const handleSelectStart = (e) => {
  //     if (e.target.tagName === "IMG") {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };

  //   const handleDragStart = (e) => {
  //     if (e.target.tagName === "IMG") {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("copy", handleCopy);
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("selectstart", handleSelectStart);
  //   document.addEventListener("dragstart", handleDragStart);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("copy", handleCopy);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("selectstart", handleSelectStart);
  //     document.removeEventListener("dragstart", handleDragStart);
  //   };
  // }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <Services />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 overflow-x-hidden select-none">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentPage={currentPage}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer />

      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style jsx>{`
        .select-none {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
        img {
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </div>
  );
};

export default App;
