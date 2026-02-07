import Header from './sections/Header';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Features from './sections/Features';
import Security from './sections/Security';
import Partners from './sections/Partners';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Security />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
