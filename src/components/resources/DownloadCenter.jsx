import {
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";

const downloads = [
  {
    title: "Personal Tax Checklist (T1)",
    desc: "A comprehensive checklist to help individuals gather the documents needed to prepare their Canadian personal income tax return.",
    file: "#",
  },
  {
    title: "Corporate Tax Checklist (T2)",
    desc: "A practical checklist for incorporated businesses to prepare for year-end and corporate income tax filing.",
    file: "#",
  },
  {
    title: "Bookkeeping Checklist",
    desc: "Monthly bookkeeping checklist to help keep your financial records accurate, organized, and CRA-ready.",
    file: "#",
  },
  {
    title: "Payroll Checklist",
    desc: "A simple checklist covering payroll setup, employee records, remittances, T4 preparation, and year-end requirements.",
    file: "#",
  },
  {
    title: "GST/HST Checklist",
    desc: "Everything you need before preparing and filing your GST/HST return with the Canada Revenue Agency.",
    file: "#",
  },
  {
    title: "Year-End Business Checklist",
    desc: "Prepare your business for year-end with a checklist covering accounting records, assets, expenses, and supporting documents.",
    file: "#",
  },
];

export default function DownloadCenter() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Free Business Resources
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Download free checklists designed to help individuals,
            entrepreneurs, and businesses prepare for tax season,
            bookkeeping, payroll, and year-end reporting.
          </p>

        </div>

        {/* Downloads */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {downloads.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-7 hover:shadow-xl transition duration-300"
            >

              <FileText
                className="text-[#0B2D4D]"
                size={30}
              />

              <h3 className="mt-5 text-xl font-bold text-[#0B2D4D]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

              <a
                href={item.file}
                className="inline-flex items-center gap-2 mt-8 font-semibold text-[#C8A24A] hover:underline"
              >

                <Download size={18} />

                Download PDF

              </a>

            </div>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-14 flex justify-center">

          <div className="flex items-center gap-2 text-gray-500">

            <CheckCircle size={18} />

            Free downloads • No registration required

          </div>

        </div>

      </div>

    </section>
  );
}