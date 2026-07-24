import { useTranslation } from "react-i18next";

import {
  Building2,
  Stethoscope,
  Hammer,
  ShoppingBag,
  Store,
  House,
  Laptop,
  Briefcase,
} from "lucide-react";


const industries = [
  {
    key: "professionalServices",
    icon: Briefcase,
  },
  {
    key: "healthcare",
    icon: Stethoscope,
  },
  {
    key: "construction",
    icon: Hammer,
  },
  {
    key: "retail",
    icon: ShoppingBag,
  },
  {
    key: "realEstate",
    icon: House,
  },
  {
    key: "technology",
    icon: Laptop,
  },
  {
    key: "hospitality",
    icon: Store,
  },
  {
    key: "smallBusiness",
    icon: Building2,
  },
];


export default function Industries() {

  const { t } = useTranslation();


  return (

    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">


          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">

            {t("home.industries.eyebrow")}

          </p>


          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">

            {t("home.industries.title")}

          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-8">

            {t("home.industries.description")}

          </p>


        </div>



        {/* Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">


          {industries.map((industry) => {

            const Icon = industry.icon;


            return (

              <div
                key={industry.key}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >


                <div className="w-16 h-16 rounded-xl bg-[#0B2D4D] flex items-center justify-center">

                  <Icon className="w-8 h-8 text-white" />

                </div>



                <h3 className="mt-6 text-xl font-semibold text-[#0B2D4D]">

                  {t(`home.industries.${industry.key}.title`)}

                </h3>



                <p className="mt-4 text-gray-600 leading-7 text-sm">

                  {t(`home.industries.${industry.key}.description`)}

                </p>


              </div>

            );

          })}


        </div>


      </div>


    </section>

  );

}