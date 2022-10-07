import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Exp from "../components/Exp";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-stone-900  h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Fahim Iftekhar Efto | Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center ">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}
      <section id="exp" className="snap-center">
        <Exp />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Skills */}
      <section id="project" className="snap-center  ">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
