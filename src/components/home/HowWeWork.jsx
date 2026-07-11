import {
  CalendarDays,
  FolderOpen,
  Calculator,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book a Consultation",
    description:
      "Schedule a consultation online or contact our team to discuss your accounting and tax needs.",
  },
  {
    icon: FolderOpen,
    title: "Share Your Documents",
    description:
      "Securely provide your financial records and supporting documents for review.",
  },
  {
    icon: Calculator,
    title: "We Prepare Everything",
    description:
      "Our experienced professionals prepare your accounting records and tax filings with precision.",
  },
  {
    icon: CircleCheckBig,
    title: "Review & File",
    description:
      "After your approval, we file your returns and continue providing year-round financial support.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">
            Simple Process
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#0B2D4D]">
            How We Work
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We make accounting and taxation straightforward through a clear,
            efficient, and transparent process.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative text-center bg-slate-50 rounded-2xl p-10 hover:shadow-xl transition duration-300"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C8A24A] text-white font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <div className="mt-6 w-16 h-16 rounded-full bg-[#0B2D4D] mx-auto flex items-center justify-center">
                  <Icon className="text-white w-8 h-8" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B2D4D]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}