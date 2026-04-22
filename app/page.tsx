import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import HomeFAQClient from "@/components/HomeFAQClient";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Services />
      <HomeFAQClient />
      <Booking />
      <Contact />
    </main>
  );
}
