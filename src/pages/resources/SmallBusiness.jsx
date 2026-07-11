import {
  Building2,
  Calculator,
  Landmark,
  FileText,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const businessTopics = [
  {
    icon: Building2,
    title: "Starting a Business",
    description:
      "Learn about registering your business, choosing a business structure, and CRA business accounts.",
    link:
      "https://www.canada.ca/en/services/business/start.html",
  },

  {
    icon: Calculator,
    title: "Business Expenses",
    description:
      "Understand which business expenses may be deductible for income tax purposes.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-income-tax-reporting/business-expenses.html",
  },

  {
    icon: Landmark,
    title: "Business Taxes",
    description:
      "Learn about corporate income tax, GST/HST, payroll, instalments, and filing obligations.",
    link:
      "https://www.canada.ca/en/services/taxes/business-number.html",
  },

  {
    icon: FileText,
    title: "Business Records",
    description:
      "Keep proper accounting records and supporting documents required by the CRA.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },
];

const governmentResources = [
  {
    title: "CRA Business Information",
    link:
      "https://www.canada.ca/en/services/business.html",
  },

  {
    title: "Business Number Registration",
    link:
      "https://www.canada.ca/en/services/taxes/business-number.html",
  },

  {
    title: "Keeping Business Records",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },

  {
    title: "Business Expenses",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-income-tax-reporting/business-expenses.html",
  },

  {
    title: "CRA Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function SmallBusiness() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Small Business Resources"
        title="Small Business Resource Centre"
        description="Simple guidance to help Canadian small business owners understand their accounting, tax, and reporting responsibilities."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Running a Small Business
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Running a successful business involves more than serving
            customers. Business owners are responsible for maintaining
            accurate financial records, filing tax returns, managing
            payroll when applicable, collecting GST/HST when required,
            and complying with Canada Revenue Agency (CRA) regulations.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Understanding these responsibilities from the beginning can
            save time, reduce stress, and help your business grow with
            confidence.
          </p>

        </div>

      </section>
            {/* Common Small Business Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Small Business Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Every business owner should understand these core financial and
            tax responsibilities to keep their business organized and
            compliant.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {businessTopics.map((topic, index) => {

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


      {/* Things Every Business Owner Should Know */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Things Every Business Owner Should Know
          </h2>

          <div className="mt-10 space-y-8">

            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Keep Accurate Records
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Maintain organized records of income, expenses, invoices,
                receipts, and bank transactions throughout the year. Good
                bookkeeping makes tax filing much easier.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Separate Business and Personal Finances
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Use separate business bank accounts and credit cards whenever
                possible. This simplifies bookkeeping and improves financial
                reporting.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Understand Your Tax Responsibilities
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Depending on your business, you may need to file income tax,
                GST/HST returns, payroll remittances, and other CRA filings
                throughout the year.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Review Your Financial Performance
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Regularly reviewing your financial statements helps you
                understand profitability, manage cash flow, and make better
                business decisions.
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
            The Canada Revenue Agency (CRA) provides official guidance for
            starting and operating a business, maintaining accounting records,
            claiming business expenses, and meeting your tax obligations.
            The resources below will take you directly to the appropriate
            government pages.
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
            Need Help Managing Your Small Business?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Whether you're starting a new business or growing an existing one,
            Sky High Financial Management can help with bookkeeping,
            accounting, payroll, GST/HST, financial reporting, tax planning,
            and year-end tax compliance so you can focus on running your
            business with confidence.
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