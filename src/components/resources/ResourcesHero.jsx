import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResourcesHero() {
  return (
    <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/resources-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#071F35]/65" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071F35]/90 via-[#071F35]/60 to-transparent" />

      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">

            <BookOpen size={18} />

            Financial Knowledge Centre

          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">

            Financial Resources

            <span className="block text-[#C8A24A]">
              & Tax Insights
            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-200">

            Explore practical accounting guides, tax planning strategies,
            payroll resources, bookkeeping best practices, CRA updates,
            and expert financial insights written to help individuals
            and businesses across Canada make informed decisions.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="rounded-xl bg-[#C8A24A] px-8 py-4 font-semibold text-[#071F35] transition-all duration-300 hover:bg-[#d6b15b] shadow-lg"
            >
              Book Consultation
            </Link>

            <a
              href="#articles"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
            >
              Browse Articles

              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}