import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Interests from "@/components/interests/Interests";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import GitHubSection from "@/components/github/GitHubSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-deep text-fg-primary">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Interests />
        <Projects />
        <Journey />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
