import { Navbar, Home, About, Skills, Projects, Contact, Footer } from './sections';

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
