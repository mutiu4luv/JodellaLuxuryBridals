import WeddingGownCard from "../../WeddingGownCard";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroPage/HeroSection";

import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />

      <Testimonial />
      <WeddingGownCard />
      <MyPortfolio />
      {/* <Testimony /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
