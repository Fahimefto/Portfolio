import Head from "next/head";
import About from "../components/About";
import Exp from "../components/Exp";
import Header from "../components/Header";
import Hero from "../components/Hero";

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

      {/* Contact */}
    </div>
  );
}
