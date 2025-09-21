import Navbar from "./components/container/Navbar/Navbar";
import Hero from "./components/container/HeroSection";
import Clients from "./components/container/Clients/Clients";
import Result from "./components/container/Results";
import Process from "./components/container/Process";
import Features from "./components/container/Features";
import Industries from "./components/container/Industries";
import Portfolios from "./components/container/Portfolios";
import Testimonials from "./components/container/Testimonials";
import Faq from "./components/container/FAQ";
import Form from "./components/container/Form";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer/Footer";
import Modal from "./components/container/Popup";

function App() {
  return (
    <div className="font-quicksand bg-white dark:bg-black text-[#0A0D12] dark:text-[#FDFDFD] max-w-7xl mx-auto w-full">
      <Navbar />
      <Hero />
      <Clients />
      <Result />
      <Process />
      <Features />
      <Industries />
      <Portfolios />
      <Testimonials />
      <Faq />
      <Form />
      <Modal
        type={"success"}
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
