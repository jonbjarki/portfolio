import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutMeSection from "./components/about-me/about";
import ExperienceSection from "./components/experience/experience";
import ProjectsSection from "./components/projects/projects";
import ContactForm from "./components/contact/contact";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <>
      <Header />
      <div id="page-shell">
        <Sidebar />
        <main id="content">
          <AboutMeSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactForm />
        </main>
      </div>
      <Footer />
    </>
  );
}
