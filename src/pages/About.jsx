import { CheckCircle2, Target, Eye, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHero from "../components/common/PageHero";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide reliable, professional accounting, bookkeeping, payroll, and tax services that help individuals and businesses make informed financial decisions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become one of Canada's most trusted accounting firms by delivering exceptional service, modern technology, and long-term client relationships.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Integrity, professionalism, transparency, responsiveness, and genuine commitment to our clients' success.",
  },
];

const reasons = [
  "Professional Accounting & Bookkeeping",
  "Corporate & Personal Tax Expertise",
  "Canada & USA Cross-Border Tax Services",
  "Payroll & CRA Compliance",
  "Cloud Accounting Solutions",
  "Multilingual Service (English | فارسی | العربية)",
];

export default function About() {
  return (
    <>
 <PageHero
  image="/images/about-hero.jpg"
  eyebrow="GET TO KNOW US"
  title="Your Trusted Partner for Financial Success"
  description="Learn about Sky High Financial Management, our professional approach, and our commitment to providing accurate, reliable, and personalized accounting and tax solutions for every client we serve."
/>
      {/* Company */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold text-[#0B2D4D]">
              Who We Are
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Sky High Financial Management Inc. is committed to
              delivering accurate accounting, tax, and financial
              solutions tailored to the unique needs of each client.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We believe accounting should provide clarity—not
              complexity. Our goal is to help business owners
              understand their financial position, remain compliant,
              reduce tax risk, and make confident decisions for
              future growth.
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-sm">

            <h3 className="text-2xl font-bold text-[#0B2D4D] mb-8">
              Why Businesses Choose Us
            </h3>

            <div className="space-y-5">

              {reasons.map((item) => (

                <div
                  key={item}
                  className="flex gap-4 items-start"
                >

                  <CheckCircle2 className="text-[#C8A24A] mt-1" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >

                  <Icon className="w-10 h-10 text-[#C8A24A]" />

                  <h3 className="mt-6 text-2xl font-bold text-[#0B2D4D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#0B2D4D]">
            Let's Build Your Financial Success Together
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            Whether you're starting a business, managing growth,
            or preparing your taxes, we're here to help every
            step of the way.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-12 bg-[#0B2D4D] hover:bg-[#143e63] text-white px-10 py-4 rounded-xl font-semibold transition"
          >
            Book a Consultation
          </Link>

        </div>

      </section>
    </>
  );
}