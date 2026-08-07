import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Safety from "./components/sections/Safety";
import HowItWorks from "./components/sections/HowItWorks";
import Coverage from "./components/sections/Coverage";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Safety />
        <HowItWorks />
        <Coverage />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;