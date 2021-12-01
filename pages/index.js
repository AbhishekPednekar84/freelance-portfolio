import Head from "next/head";

// Component imports
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
