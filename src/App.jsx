import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { allProjects } from "./data/projects";

const pages = {
  services: Services,
  projects: Projects,
  about: About,
  contact: Contact,
  home: Home,
};

const parseHash = (hash) => {
  const clean = hash.replace("#", "") || "home";
  const project = allProjects.find((p) => p.slug === clean);
  if (project) return { page: "project-detail", slug: clean };
  return { page: clean, slug: null };
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [projectSlug, setProjectSlug] = useState(null);

  useEffect(() => {
    const applyHash = () => {
      const { page, slug } = parseHash(window.location.hash);
      setCurrentPage(page);
      setProjectSlug(slug);
    };

    applyHash();

    const handleHashChange = () => {
      applyHash();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenuOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const PageComponent = pages[currentPage];
  const renderPage = () => {
    if (currentPage === "project-detail") return <ProjectDetail slug={projectSlug} />;
    const Page = PageComponent || Home;
    return <Page />;
  };

  return (
    <div className="min-h-screen bg-white text-ink transition-colors duration-300 overflow-x-hidden">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentPage={currentPage}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer />

      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Sora:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default App;
