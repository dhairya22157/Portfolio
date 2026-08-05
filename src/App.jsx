import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Skills from "./components/Skills/Skills";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <div className="bg-bg-light h-auto w-full overflow-hidden text-text-primary">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <ContactForm /> {/* Add this line */}
      <Experience />
      <Projects />
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
