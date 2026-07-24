import { useTranslation } from "react-i18next";
import {
  CalendarDays,
  FolderOpen,
  Calculator,
  CircleCheckBig,
} from "lucide-react";


const steps = [
  {
    icon: CalendarDays,
    key: "consultation",
  },
  {
    icon: FolderOpen,
    key: "documents",
  },
  {
    icon: Calculator,
    key: "preparation",
  },
  {
    icon: CircleCheckBig,
    key: "review",
  },
];


export default function HowWeWork() {

  const { t } = useTranslation();


  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

        <div className="text-center">


          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">
            {t("home.howWeWork.eyebrow")}
          </p>


          <h2 className="text-5xl font-bold mt-4 text-[#0B2D4D]">
            {t("home.howWeWork.title")}
          </h2>


          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            {t("home.howWeWork.description")}
          </p>


        </div>



        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">


          {steps.map((step, index) => {

            const Icon = step.icon;


            return (

              <div
                key={step.key}
                className="relative text-center bg-slate-50 rounded-2xl p-10 hover:shadow-xl transition duration-300"
              >


                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C8A24A] text-white font-bold flex items-center justify-center">

                  {index + 1}

                </div>



                <div className="mt-6 w-16 h-16 rounded-full bg-[#0B2D4D] mx-auto flex items-center justify-center">

                  <Icon className="text-white w-8 h-8" />

                </div>



                <h3 className="mt-6 text-xl font-semibold text-[#0B2D4D]">

                  {t(`home.howWeWork.steps.${step.key}.title`)}

                </h3>



                <p className="mt-4 text-gray-600 leading-7">

                  {t(`home.howWeWork.steps.${step.key}.description`)}

                </p>



              </div>

            );

          })}


        </div>


      </div>


    </section>

  );

}