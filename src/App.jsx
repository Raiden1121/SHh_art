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
    <>
      {/* 導覽列要放在最外層，不要被 padding 包住 */}
      <Navigation />

      {/* 主內容區塊預留導覽列高度 */}
      <main className="min-h-screen bg-white pt-20 md:pt-24">
        <Home />
        <About />
        <Courses />
        <Teachers />
        <Gallery />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
