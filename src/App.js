import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/HomePage";
import Projects from "./pages/projects/ProjectsPage";
import Contacts from "./pages/contact/ContactPage";
import Project from "./pages/project/ProjectPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
