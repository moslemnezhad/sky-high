import { useTranslation } from "react-i18next";
import { direction, textAlign } from "../../utils/language";

export default function Hero() {
  const { t } = useTranslation();

  return (
    // Keep hero layout LTR so content always stays on the LEFT
    <section
      className="relative min-h-[90vh] flex items-center"
      dir="ltr"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071F35]/25" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071F35]/75 via-[#071F35]/35 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-4 xl:px-0 w-full">

        {/* Always stays on LEFT */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p
            dir={direction()}
            className={`uppercase tracking-[0.35em] text-[#C8A24A] font-semibold ${textAlign()}`}
          >
            {t("home.hero.eyebrow")}
          </p>

          {/* Title */}
          <h1
            dir={direction()}
            className={`mt-4 text-5xl md:text-6xl font-bold leading-[1.1] text-white ${textAlign()}`}
          >
            {t("home.hero.title1")}
            <br />
            {t("home.hero.title2")}
          </h1>

          {/* Description */}
          <p
            dir={direction()}
            className={`mt-6 max-w-3xl text-xl leading-8 text-gray-200 ${textAlign()}`}
          >
            {t("home.hero.description")}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-start">

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#C8A24A] px-8 py-4 font-semibold text-[#071F35] shadow-lg transition hover:bg-[#d6b15b]"
            >
              {t("home.hero.book")}
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {t("home.hero.services")}
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}