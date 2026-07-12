import { useTranslation } from "react-i18next";
import Container from "../common/Container";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      value: t("home.stats.experience.value"),
      label: t("home.stats.experience.label"),
    },
    {
      value: t("home.stats.returns.value"),
      label: t("home.stats.returns.label"),
    },
    {
      value: t("home.stats.compliance.value"),
      label: t("home.stats.compliance.label"),
    },
    {
      value: t("home.stats.support.value"),
      label: t("home.stats.support.label"),
    },
  ];

  return (
    <section className="bg-[#0B2D4D] text-white py-24">

      <Container>

        <div className="text-center max-w-2xl mx-auto mb-14">

          <h2 className="text-4xl font-bold">
            {t("home.stats.title")}
          </h2>

          <p className="mt-4 text-blue-100 text-sm">
            {t("home.stats.subtitle")}
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group"
            >

              <div className="text-4xl font-bold text-[#C8A24A] group-hover:scale-105 transition">

                {item.value}

              </div>

              <div className="mt-3 text-blue-100 text-sm">

                {item.label}

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}