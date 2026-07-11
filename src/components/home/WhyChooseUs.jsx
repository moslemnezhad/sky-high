import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: ShieldCheck,
      title: t("home.whyChooseUs.features.compliance.title"),
      desc: t("home.whyChooseUs.features.compliance.desc"),
    },
    {
      icon: TrendingUp,
      title: t("home.whyChooseUs.features.tax.title"),
      desc: t("home.whyChooseUs.features.tax.desc"),
    },
    {
      icon: Users,
      title: t("home.whyChooseUs.features.support.title"),
      desc: t("home.whyChooseUs.features.support.desc"),
    },
    {
      icon: Clock,
      title: t("home.whyChooseUs.features.deadline.title"),
      desc: t("home.whyChooseUs.features.deadline.desc"),
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">

      <Container>

        <SectionTitle
          title={t("home.whyChooseUs.title")}
          subtitle={t("home.whyChooseUs.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item, i) => {

            const Icon = item.icon;

            return (

              <div
                key={i}
                className="bg-white p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0B2D4D]/5 mb-5">
                  <Icon className="text-[#0B2D4D]" size={26} />
                </div>

                <h3 className="text-lg font-bold text-[#0B2D4D]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}