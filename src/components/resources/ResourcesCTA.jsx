import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ResourcesCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#0B2D4D]">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
          {t("resources.cta.eyebrow")}
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          {t("resources.cta.title")}
        </h2>

        <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
          {t("resources.cta.description")}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#C8A24A] px-8 py-4 font-semibold text-[#071F35] transition hover:bg-[#d6b15b]"
          >
            {t("resources.cta.primary")}
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            {t("resources.cta.secondary")}
          </Link>

        </div>

      </div>

    </section>
  );
}