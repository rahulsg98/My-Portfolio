import { About, Achievements, Contact, Experience, Footer, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import { CursorGlow } from "./components/ui/effects";

const App = () => (
  <div className="noise relative z-0 min-h-screen overflow-x-clip">
    <StarsCanvas />
    <CursorGlow />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Achievements />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
