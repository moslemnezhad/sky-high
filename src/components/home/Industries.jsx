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
    title: "Professional Services",
    icon: Briefcase,
    description:
      "Accounting solutions for consultants, lawyers, engineers, and other professionals.",
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    description:
      "Financial and tax services for physicians, dentists, clinics, and healthcare providers.",
  },
  {
    title: "Construction",
    icon: Hammer,
    description:
      "Bookkeeping, payroll, GST/HST, and tax planning for contractors and construction companies.",
  },
  {
    title: "Retail & E-Commerce",
    icon: ShoppingBag,
    description:
      "Inventory, sales tax, bookkeeping, and financial reporting for retail businesses.",
  },
  {
    title: "Real Estate",
    icon: House,
    description:
      "Accounting and tax support for investors, developers, landlords, and real estate professionals.",
  },
  {
    title: "Technology",
    icon: Laptop,
    description:
      "Cloud accounting and financial advisory for startups and technology companies.",
  },
  {
    title: "Hospitality",
    icon: Store,
    description:
      "Payroll, bookkeeping, and tax services for restaurants, cafés, and hotels.",
  },
  {
    title: "Small Businesses",
    icon: Building2,
    description:
      "Comprehensive accounting and tax support designed for growing Canadian businesses.",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#C8A24A] font-semibold">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B2D4D]">
            Supporting Businesses Across Canada
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We provide tailored accounting, bookkeeping, payroll, tax, and
            advisory services to businesses across a wide range of industries.
          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#0B2D4D] flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B2D4D]">
                  {industry.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7 text-sm">
                  {industry.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}