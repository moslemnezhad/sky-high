import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide virtual accounting and tax services?",
    answer:
      "Yes. We work with clients across Canada through secure online meetings, encrypted document exchange, email, and phone consultations.",
  },
  {
    question: "Do you prepare Corporate (T2) tax returns?",
    answer:
      "Absolutely. We prepare and file T2 corporate tax returns for incorporated businesses, along with tax planning and year-end financial statements.",
  },
  {
    question: "Do you prepare Personal (T1) tax returns?",
    answer:
      "Yes. We prepare personal income tax returns for employees, self-employed individuals, investors, landlords, retirees, and families.",
  },
  {
    question: "Can you help with Canada–USA cross-border taxation?",
    answer:
      "Yes. We assist clients with cross-border tax matters, U.S. filing requirements, foreign income reporting, and tax planning for individuals and businesses.",
  },
  {
    question: "Do you offer bookkeeping and payroll services?",
    answer:
      "Yes. We provide monthly bookkeeping, payroll processing, CRA remittances, T4 preparation, GST/HST reporting, and financial reporting.",
  },
  {
    question: "Which accounting software do you support?",
    answer:
      "We work with QuickBooks Online, QuickBooks Desktop, Sage, Xero, Wave, and other leading accounting platforms.",
  },
  {
    question: "Can you represent clients before the CRA?",
    answer:
      "Yes. We assist clients with CRA correspondence, reviews, audit support, notices, and compliance matters.",
  },
  {
    question: "Do you work with clients outside British Columbia?",
    answer:
      "Yes. We proudly serve individuals and businesses throughout Canada using secure digital communication and cloud-based accounting solutions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#0B2D4D]">
            Answers to Common Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to the questions we receive most often from
            individuals, entrepreneurs, and businesses across Canada.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition"
              >

                <span className="font-semibold text-lg text-[#0B2D4D]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}