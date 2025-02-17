import HeroSection from "../components/HeroSection";
import CoachesCarousel from "../components/CoachesCarousel";
import Features from "../components/Features";
import TimeCounter from "../components/TimeCounter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoachesCarousel />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
