import { useTranslation } from "react-i18next";

export default function TaxDeadlines() {

  const { t } = useTranslation();

  const deadlines = [
    { id: "personal" },
    { id: "selfEmployed" },
    { id: "corporatePayment" },
    { id: "t2" },
    { id: "gst" },
    { id: "payroll" },
  ];

  return (

    <section className="bg-[#F8FAFC] py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">

            {t("resources.deadlines.eyebrow")}

          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">

            {t("resources.deadlines.heading")}

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            {t("resources.deadlines.description")}

          </p>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-200 mt-16">

          <table className="w-full">

            <thead className="bg-[#0B2D4D] text-white">

              <tr>

                <th className="text-left px-6 py-5 font-semibold w-1/3">

                  {t("resources.deadlines.table.deadline")}

                </th>

                <th className="text-left px-6 py-5 font-semibold">

                  {t("resources.deadlines.table.description")}

                </th>

              </tr>

            </thead>

            <tbody>

              {deadlines.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5 font-semibold text-[#0B2D4D]">

                    {t(`resources.deadlines.items.${item.id}.date`)}

                  </td>

                  <td className="px-6 py-5 text-gray-600">

                    {t(`resources.deadlines.items.${item.id}.description`)}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">

          <h3 className="text-lg font-semibold text-[#0B2D4D] mb-3">

            {t("resources.deadlines.note.title")}

          </h3>

          <p className="text-gray-600 leading-7">

            {t("resources.deadlines.note.description")}

          </p>

        </div>

      </div>

    </section>

  );

}