import BavetteStory from "@/app/about-us/(section)/BavetteStory";
import Hero from "@/app/about-us/(section)/Hero";
import JoinUs from "@/app/about-us/(section)/JoinUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "./(section)/Review";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <BavetteStory />
        <JoinUs />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
};

export default page;

// Images:
// public/images/about-us
