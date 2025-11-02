// App entry layout

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Courses from "./sections/Courses";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import CourseDetail from "./pages/CourseDetail";

function MainPage() {
  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24">
      <Home />
      <About />
      <Courses />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/course/:courseId"
          element={
            <main className="min-h-screen bg-white pt-20 md:pt-24">
              <CourseDetail />
              <Footer />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
