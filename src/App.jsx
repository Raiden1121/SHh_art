// App entry layout

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Teachers from "./sections/Teachers";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      <Navigation />
      <Home />
      <About />
      <Courses />
      <Teachers />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
