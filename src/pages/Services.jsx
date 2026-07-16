import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import { services } from "../data/services";

import {
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  FileCheck,
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const categories = [
    "business",
    "tax",
    "advisory",
  ];

  return (
    <>
      <PageHero
        image="/images/services-hero.jpg"
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        description={t("services.hero.description")}
      />

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* INTRO */}

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


          {/* SERVICE CATEGORIES */}

          <div className="mt-20">

            {categories.map((category) => (

              <div key={category} className="mb-20">


                {/* Category Header */}

                <div className="max-w-4xl mb-12">

                  <div className="flex items-center gap-4">

                    <div className="h-[2px] w-12 bg-[#C8A24A]" />

                      <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#C8A24A]">
                        {t(`services.categories.${category}.title`)}
                      </p>

                    </div>


                    <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#0B2D4D]">

                      {t(`services.categories.${category}.title`)}

                    </h3>


                    <p className="mt-4 text-lg text-gray-600 leading-8 max-w-3xl">

                      {t(`services.categories.${category}.description`)}

                    </p>


                  </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


                  {services
                    .filter((service) => service.category === category)
                    .map((service) => {

                      const Icon = service.icon;


                      return (

                        <div
                          key={service.slug}
                          className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >

                          <div className="w-16 h-16 rounded-xl bg-[#0B2D4D] flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors">

                            <Icon className="w-8 h-8 text-white" />

                          </div>


                          <h4 className="mt-6 text-xl font-semibold text-[#0B2D4D]">

                            {t(`services.cards.${service.id}.title`)}

                          </h4>


                          <p className="mt-4 text-gray-600 leading-7 text-sm flex-grow">

                            {t(`services.cards.${service.id}.description`)}

                          </p>


                          <Link
                            to={`/services/${service.slug}`}
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B2D4D] hover:text-[#C8A24A] transition-colors"
                          >

                            {t("services.buttons.learnMore")}

                            <ArrowRight
                              className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            />

                          </Link>


                        </div>

                      );

                    })}


                </div>

              </div>

            ))}

          </div>
{/* WHY CHOOSE US */}

<section className="mt-24 bg-[#0B2D4D] rounded-3xl px-8 py-16 text-white">

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold text-sm">
      {t("services.whyChoose.eyebrow")}
    </p>


    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
      {t("services.whyChoose.title")}
    </h2>


    <p className="mt-5 text-blue-100 leading-8">
      {t("services.whyChoose.description")}
    </p>


  </div>


  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">


    {[
      {
        icon: ShieldCheck,
        key: "compliance",
      },
      {
        icon: Users,
        key: "personalized",
      },
      {
        icon: Globe,
        key: "multilingual",
      },
      {
        icon: FileCheck,
        key: "accuracy",
      },
    ].map((item) => {

      const Icon = item.icon;

      return (

        <div
          key={item.key}
          className="bg-white/10 rounded-2xl p-6 text-center"
        >

          <Icon className="w-10 h-10 mx-auto text-[#C8A24A]" />


          <h3 className="mt-5 text-lg font-semibold">
            {t(`services.whyChoose.items.${item.key}.title`)}
          </h3>


          <p className="mt-3 text-sm text-blue-100 leading-6">
            {t(`services.whyChoose.items.${item.key}.description`)}
          </p>


        </div>

      );

    })}


  </div>

</section>
{/* SERVICES CTA */}

<div className="mt-24 text-center">

  <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 px-8 py-16">

    <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold text-sm">
      {t("services.cta.eyebrow")}
    </p>

    <h2 className="mt-4 text-4xl font-bold text-[#0B2D4D]">
      {t("services.cta.title")}
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-8">
      {t("services.cta.description")}
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link to="/contact">

        <button className="bg-[#C8A24A] hover:bg-[#d8b056] text-[#071F35] font-semibold px-8 py-4 rounded-xl transition">

          {t("services.cta.book")}

        </button>

      </Link>

      <Link to="/about">

        <button className="border border-[#0B2D4D] text-[#0B2D4D] hover:bg-[#0B2D4D] hover:text-white font-semibold px-8 py-4 rounded-xl transition">

          {t("services.cta.about")}

        </button>

      </Link>

    </div>

  </div>

</div>

        </div>

      </section>

    </>
  );
}