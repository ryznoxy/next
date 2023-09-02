import Header from "./Header/Header";
import About from "./about/About";
import Skills from "./props/skills/skills";
import Footer from "./props/footer/footer";
import Madewith from "./props/MadeWithNextJS";
import Navbar from "./props/nav/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  return (
    <div className="mx-auto w-[400px] bg-slate-950 rounded-lg ring-1 ring-white mt-2 lg:mt-5 p-10 text-black flex justify-center items-center flex-col">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Madewith />
      <Footer />
    </div>
  );
}
