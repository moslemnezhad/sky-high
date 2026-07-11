import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesPreview from "../components/home/ServicesPreview";
import HowWeWork from "../components/home/HowWeWork";
import Industries from "../components/home/Industries";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* CORE SECTIONS */}
      <div className="space-y-0">

        <div className="py-2">
          <WhyChooseUs />
        </div>

        <div className="py-2">
          <ServicesPreview />
        </div>

        <div className="py-2">
          <HowWeWork />
        </div>

        <div className="py-2">
          <Industries />
        </div>

        <div className="py-2">
          <Stats />
        </div>

        <CTA />

      </div>

    </main>
  );
}