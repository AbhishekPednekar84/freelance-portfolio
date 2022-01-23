import Head from "next/head";

// Component imports
import HomeHeadLayout from "../components/layout/HomeHeadLayout";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Services from "../components/sections/services/Services";
import Projects from "../components/sections/projects/Projects";
import Testimonials from "../components/sections/testimonials/Testimonials";
import ContactForm from "../components/sections/contact/ContactForm";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function Home() {
  return (
    <HomeHeadLayout>
      <header>
        <Navbar />
        <Hero />
      </header>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <ScrollToTop />
    </HomeHeadLayout>
  );
}
