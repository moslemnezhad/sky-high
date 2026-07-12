import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import { services } from "../data/services";

import {
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        image="/images/services-hero.jpg"
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        description={t("services.hero.description")}
      />

      {/* SERVICES */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
              {t("services.intro.eyebrow")}
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">
              {t("services.intro.title")}
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              {t("services.intro.description")}
            </p>

          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <div
                  key={service.slug}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >

                  <div className="w-16 h-16 rounded-xl bg-[#0B2D4D] flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors">

                    <Icon className="w-8 h-8 text-white" />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#0B2D4D]">

                    {t(`services.cards.${service.id}.title`)}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7 text-sm flex-grow">

                    {t(`services.cards.${service.id}.description`)}

                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B2D4D] hover:text-[#C8A24A] transition-colors"
                  >

                    {t("services.buttons.learnMore")}

                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

                  </Link>

                </div>

              );

            })}

          </div>

        </div>

      </section>
          </>
  );
}