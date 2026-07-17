import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { categories } from "../../content/categories";

export default function CategoryGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">
            {t("resources.categories.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">
            {t("resources.categories.heading")}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            {t("resources.categories.description")}
          </p>

        </div>

        {/* Category Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((cat) => (

            <Link
              key={cat.id}
              to={`/resources/${cat.id}`}
              className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className="h-2 w-16 rounded-full"
                style={{ background: cat.color }}
              />

              <h3 className="mt-8 text-xl font-bold text-[#0B2D4D] transition group-hover:text-[#C8A24A]">

                {t(`resources.categories.items.${cat.id}.title`)}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {t(`resources.categories.items.${cat.id}.description`)}

              </p>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}