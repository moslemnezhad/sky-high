import { CheckCircle2, Target, Eye, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageHero from "../components/common/PageHero";

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t("about.mission.title"),
      text: t("about.mission.text"),
    }, 
    {
      icon: Eye,
      title: t("about.vision.title"),
      text: t("about.vision.text"),
    },
    {
      icon: HeartHandshake,
      title: t("about.values.title"),
      text: t("about.values.text"),
    },
  ];

  const reasons = [
    t("about.why.accounting"),
    t("about.why.tax"),
    t("about.why.crossBorder"),
    t("about.why.payroll"),
    t("about.why.cloud"),
    t("about.why.multi"),
  ];

  return (
    <>
      <PageHero
        image="/images/about-hero.jpg"
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        description={t("about.hero.description")}
      />

      {/* About Founder */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}

            <div>

              <img
                src="/images/founder.jpg"
                alt="Mohammad Moslem Nezhad"
                className="w-full rounded-3xl shadow-xl object-cover"
              />

            </div>

            {/* Content */}

            <div>

              <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
                {t("about.founder.eyebrow")}
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
                {t("about.founder.name")}
              </h2>

              <p className="mt-2 text-xl font-semibold text-[#C8A24A]">
                {t("about.founder.position")}
              </p>

              <p className="mt-8 text-gray-600 leading-8">
                {t("about.founder.paragraph1")}
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                {t("about.founder.paragraph2")}
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                {t("about.founder.paragraph3")}
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                {t("about.founder.paragraph4")}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Company */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
              {t("about.company.eyebrow")}
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
              {t("about.company.title")}
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              {t("about.company.paragraph1")}
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              {t("about.company.paragraph2")}
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
              {t("about.why.eyebrow")}
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
              {t("about.why.title")}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {t("about.why.description")}
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {reasons.map((item,index)=>(

              <div
                key={index}
                className="
                bg-slate-50
                rounded-3xl
                p-8
                border
                border-gray-100
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                <CheckCircle2
                  className="text-[#C8A24A]"
                  size={34}
                />

                <h3 className="mt-6 text-xl font-bold text-[#0B2D4D]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Mission Vision Values */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0B2D4D] flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors">

                    <Icon className="w-8 h-8 text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#0B2D4D]">
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

          <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
            {t("about.cta.eyebrow")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B2D4D]">
            {t("about.cta.title")}
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            {t("about.cta.description")}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            {/* Primary */}

            <Link
              to="/contact"
              className="
              bg-[#C8A24A]
              hover:bg-[#b58f39]
              text-white
              px-10
              py-4
              rounded-xl
              font-semibold
              transition
              "
            >
              {t("about.cta.consultation")}
            </Link>

            {/* Secondary */}

            <Link
              to="/services"
              className="
              border-2
              border-[#0B2D4D]
              text-[#0B2D4D]
              hover:bg-[#0B2D4D]
              hover:text-white
              px-10
              py-4
              rounded-xl
              font-semibold
              transition
              "
            >
              {t("about.cta.contact")}
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}