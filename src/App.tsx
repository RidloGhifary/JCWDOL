import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import heroImage from "../assets/images/hero.jpg";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <section
          id="hero"
          className="bg-cover bg-center h-64 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 text-white p-8">
            <h1 className="text-4xl font-bold">Welcome to TechSolutions AI</h1>
            <p>Empowering Businesses with Intelligent Solutions.</p>
          </div>
        </section>
        <section id="overview" className="p-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            Founded in 2018, TechSolutions AI provides innovative AI-driven
            solutions to enhance business operations and drive growth. Our
            mission is to empower businesses with intelligent solutions.
          </p>
        </section>
        <section id="services" className="p-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul>
            <li>AI Analytics Platform</li>
            <li>Chatbot Solutions</li>
            <li>Predictive Maintenance</li>
            <li>Image Recognition API</li>
          </ul>
        </section>
        <section id="testimonials" className="p-8">
          <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
          <p>
            "TechSolutions AI transformed our business operations. Their AI
            analytics platform provided insights that we never thought
            possible!" - Client A
          </p>
          <p>
            "The chatbot solutions have significantly improved our customer
            service. Highly recommend!" - Client B
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
