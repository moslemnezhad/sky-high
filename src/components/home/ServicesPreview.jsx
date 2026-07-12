import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

export default function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          title={t("home.servicesPreview.title")}
          subtitle={t("home.servicesPreview.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:border-[#C8A24A] hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-[#0B2D4D] flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors">

                  <Icon className="w-8 h-8 text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

                  {t(`services.cards.${service.id}.title`)}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8 flex-grow">

                  {t(`services.cards.${service.id}.description`)}

                </p>

                {/* CTA */}

                <div className="mt-8 border-t border-gray-100 pt-6">

                  <span className="inline-flex items-center gap-2 font-semibold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

                    {t("home.servicesPreview.button")}

                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

                  </span>

                </div>

              </Link>

            );

          })}

        </div>

      </Container>
    </section>
  );
}