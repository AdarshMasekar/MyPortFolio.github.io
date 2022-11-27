import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";

type section = {};

const Home: NextPage = () => {
  return (
    <div
    className="bg-[#222222] text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    z-0 scrollbar-thin scrollbar-track-secondary/10 
    scrollbar-thumb-primary/20 scrollbar-thumb-rounded"
    >
  
      <Head>
        <title>Adarsh Masekar Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start hero">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="Techskills" className="snap-start">
        <TechSkills />
      </section>

      <section id="experience" className="snap-center ">
        <Experience />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer>
        <ChevronDoubleUpIcon
            className="fixed bg-transparent text-[#E45826]/20 hover:text-[#E45826] animate-bounce w-10 h-10
            bottom-[1%] right-[5%] cursor-pointer z-100"
          />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
