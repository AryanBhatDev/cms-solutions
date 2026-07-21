import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Services } from "@/components/site/services";
import { Showcase } from "@/components/site/showcase";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Team } from "@/components/site/team";
import { Values } from "@/components/site/values";
import { WhyUs } from "@/components/site/why-us";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Values />
        <WhyUs />
        <Team />
        <About />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
