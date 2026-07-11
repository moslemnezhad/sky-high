import {
  Building2,
  FileText,
  Calculator,
  Receipt,
  Landmark,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";


const corporateTopics = [
  {
    icon: FileText,
    title: "Corporate Tax Return (T2)",
    description:
      "Understand the corporate income tax return process, filing requirements, and important deadlines for Canadian corporations.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-income-tax-return.html",
  },

  {
    icon: Receipt,
    title: "Business Income & Expenses",
    description:
      "Learn about recording business income, tracking expenses, and maintaining proper supporting documentation.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-expenses.html",
  },

  {
    icon: Calculator,
    title: "Tax Deductions",
    description:
      "Understand common business deductions and expenses that may reduce taxable business income.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-expenses.html",
  },

  {
    icon: Landmark,
    title: "GST/HST & Payroll Obligations",
    description:
      "Businesses may have responsibilities related to GST/HST registration, payroll deductions, and remittances.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
  },
];


const governmentResources = [
  {
    title: "CRA Corporation Income Tax",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations.html",
  },

  {
    title: "T2 Corporation Income Tax Return",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2.html",
  },

  {
    title: "Business Expenses",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-expenses.html",
  },

  {
    title: "GST/HST for Businesses",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
  },

  {
    title: "Payroll Information",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html",
  },
];


export default function CorporateTax() {

  return (
    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Corporate Tax Resources"
        title="Corporate Tax Resource Centre"
        description="Simple guidance to help Canadian business owners understand corporate tax responsibilities, prepare required information, and find trusted CRA resources."
      />


      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Corporate Tax?
          </h2>


          <p className="mt-8 text-lg leading-8 text-gray-700">
            Corporate tax is the income tax paid by Canadian corporations
            on their business profits. Most incorporated businesses must
            file a T2 Corporation Income Tax Return every year, even if
            no tax is payable.
          </p>


          <p className="mt-6 text-lg leading-8 text-gray-700">
            Proper bookkeeping, accurate financial records, and year-round
            planning help business owners understand their tax position and
            make better financial decisions.
          </p>

        </div>

      </section>
            {/* Common Corporate Tax Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Corporate Tax Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Every incorporated business has tax responsibilities. The topics
            below introduce the most common areas business owners should
            understand.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {corporateTopics.map((topic, index) => {

              const Icon = topic.icon;

              return (

                <a
                  key={index}
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group"
                >

                  <div className="flex items-start gap-5">

                    <div className="bg-[#0B2D4D] p-4 rounded-2xl">

                      <Icon
                        className="text-[#C8A24A]"
                        size={26}
                      />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-2xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

                        {topic.title}

                      </h3>

                      <p className="mt-4 text-gray-600 leading-7">

                        {topic.description}

                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-[#C8A24A] font-semibold">

                        Learn More from CRA

                        <ExternalLink size={18} />

                      </div>

                    </div>

                  </div>

                </a>

              );

            })}

          </div>

        </div>

      </section>


      {/* Things Business Owners Should Know */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">

            Things Business Owners Should Know

          </h2>

          <div className="mt-10 space-y-8">


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Keep Accurate Financial Records
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Maintain organized bookkeeping throughout the year. Accurate
                records make tax filing easier and help support the information
                reported on your corporate tax return.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Separate Business and Personal Expenses
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Use separate bank accounts and credit cards for business
                transactions whenever possible. This helps keep your accounting
                accurate and simplifies tax reporting.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Review Your Business Before Year-End
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Reviewing your financial results before the fiscal year ends may
                provide opportunities for better tax planning and improved cash
                flow.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Know Your Filing Deadlines
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Corporate income tax returns, GST/HST filings, payroll
                remittances, and information returns all have different filing
                requirements and deadlines.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Official Government Resources */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Official Government Resources
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            The Canada Revenue Agency (CRA) provides official guidance,
            publications, forms, and online services to help corporations meet
            their tax obligations. The resources below will take you directly
            to the relevant CRA pages.
          </p>

          <div className="mt-12 space-y-4">

            {governmentResources.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-6 py-5 hover:border-[#C8A24A] hover:bg-white transition"
              >

                <span className="font-semibold text-[#0B2D4D]">
                  {item.title}
                </span>

                <ExternalLink className="text-[#C8A24A]" />

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* Call To Action */}

      <section className="py-20 bg-[#0B2D4D]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Need Help With Your Corporate Taxes?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Every corporation is different. Whether you need assistance with
            your T2 corporate tax return, bookkeeping, financial statements,
            tax planning, GST/HST, or payroll, Sky High Financial Management
            can provide professional guidance tailored to your business.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 bg-[#C8A24A] hover:bg-[#d6b15b] text-[#071F35] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Book a Consultation
          </a>

        </div>

      </section>

    </>
  );
}