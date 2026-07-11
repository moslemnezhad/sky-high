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

      {/* Company */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold text-[#0B2D4D]">
              {t("about.company.title")}
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              {t("about.company.paragraph1")}
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              {t("about.company.paragraph2")}
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-sm">

            <h3 className="text-2xl font-bold text-[#0B2D4D] mb-8">
              {t("about.why.title")}
            </h3>

            <div className="space-y-5">

              {reasons.map((item) => (

                <div
                  key={item}
                  className="flex gap-4 items-start"
                >

                  <CheckCircle2 className="text-[#C8A24A] mt-1 flex-shrink-0" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

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
            {t("about.cta.title")}
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            {t("about.cta.description")}
          </p>

          <Link
            to="/contact"
            className="inline-block mt-12 bg-[#0B2D4D] hover:bg-[#143e63] text-white px-10 py-4 rounded-xl font-semibold transition"
          >
            {t("about.cta.button")}
          </Link>

        </div>

      </section>

    </>
  );
}