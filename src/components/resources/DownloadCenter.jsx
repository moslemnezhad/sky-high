import { useTranslation } from "react-i18next";
import {
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";

const downloads = [
  { id: "t1", file: "#" },
  { id: "t2", file: "#" },
  { id: "bookkeeping", file: "#" },
  { id: "payroll", file: "#" },
  { id: "gst", file: "#" },
  { id: "yearend", file: "#" },
];

export default function DownloadCenter() {

  const { t } = useTranslation();

  return (

    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#C8A24A] font-semibold">

            {t("resources.downloads.eyebrow")}

          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">

            {t("resources.downloads.heading")}

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            {t("resources.downloads.description")}

          </p>

        </div>

        {/* Download Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {downloads.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <FileText
                className="text-[#0B2D4D] group-hover:text-[#C8A24A] transition-colors"
                size={34}
              />

              <h3 className="mt-6 text-xl font-bold text-[#0B2D4D]">

                {t(`resources.downloads.items.${item.id}.title`)}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {t(`resources.downloads.items.${item.id}.description`)}

              </p>

              <a
                href={item.file}
                className="inline-flex items-center gap-2 mt-8 font-semibold text-[#C8A24A] hover:text-[#0B2D4D] transition-colors"
              >

                <Download size={18} />

                {t("resources.downloads.button")}

              </a>

            </div>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-14 flex justify-center">

          <div className="flex items-center gap-2 text-gray-500">

            <CheckCircle size={18} />

            {t("resources.downloads.footer")}

          </div>

        </div>

      </div>

    </section>

  );

}