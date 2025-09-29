import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import FounderSection from "./components/FounderSection";
// import Packages from "./components/Packages";
import GlobalReach from "./components/GlobalReach";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import AnimatedCursor from "./components/AnimatedCursor";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* <AnimatedCursor /> */}
      <SmoothScroll />
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <FounderSection />
      <WhyChooseUs />
      {/* <Packages /> */}
      <GlobalReach />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
