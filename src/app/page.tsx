import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import MyTime from "@/components/MyTime";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-[family-name:var(--font-inter)]">
      <div className="min-h-screen flex flex-col relative">

        {/* Checkerboard banner */}
        <div
          className="w-full h-[25vh]"
          style={{
            backgroundColor: "#1a1a1a",
            backgroundImage:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%), linear-gradient(-45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%)",
            backgroundSize: "6px 6px",
          }}
        />

        {/* Main content area */}
        <div className="flex-1 w-full relative" style={{ backgroundColor: "#141414" }}>

          {/* Profile card — absolutely overlaps the banner */}
          <Hero />

          {/* All page sections */}
          <div className="pt-32 md:pt-20 max-w-6xl mx-auto px-4 md:px-8">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
            <MyTime />
          </div>
        </div>

      </div>
    </main>
  );
}
