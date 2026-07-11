import {
  BookOpen,
  Receipt,
  Landmark,
  Calculator,
  FileText,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const bookkeepingTopics = [
  {
    icon: BookOpen,
    title: "Recording Business Transactions",
    description:
      "Learn how to properly record income, expenses, assets, liabilities, and owner transactions.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },

  {
    icon: Landmark,
    title: "Bank Reconciliation",
    description:
      "Compare your accounting records with your bank statements to ensure your financial records are accurate.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },

  {
    icon: Receipt,
    title: "Business Expenses",
    description:
      "Understand which business expenses should be recorded and how supporting documents should be maintained.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-expenses.html",
  },

  {
    icon: Calculator,
    title: "Financial Statements",
    description:
      "Income statements and balance sheets help business owners understand the financial health of their business.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },
];

const governmentResources = [
  {
    title: "CRA Keeping Records",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html",
  },

  {
    title: "Business Expenses",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-expenses.html",
  },

  {
    title: "GST/HST Records",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
  },

  {
    title: "Payroll Records",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html",
  },

  {
    title: "CRA Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function Bookkeeping() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Bookkeeping Resources"
        title="Bookkeeping Resource Centre"
        description="Simple bookkeeping guidance for Canadian business owners to help maintain organized financial records and support accurate tax reporting."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Bookkeeping?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Bookkeeping is the process of recording and organizing the
            financial transactions of a business. Accurate bookkeeping helps
            business owners understand how their business is performing and
            provides the information needed to prepare financial statements
            and tax returns.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Good bookkeeping also makes it easier to monitor cash flow,
            prepare budgets, make business decisions, and respond to CRA
            requests if required.
          </p>

        </div>

      </section>
            {/* Common Bookkeeping Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Bookkeeping Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Good bookkeeping keeps your financial information organized,
            supports tax compliance, and helps you make informed business
            decisions throughout the year.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {bookkeepingTopics.map((topic, index) => {

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
                Record Transactions Regularly
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Update your bookkeeping consistently instead of waiting until
                year-end. Regular recordkeeping helps you stay organized and
                avoid unnecessary stress during tax season.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Keep Supporting Documents
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Save invoices, receipts, contracts, bank statements, and other
                financial documents. These records support your bookkeeping and
                may be required by the CRA.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Reconcile Your Bank Accounts
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Compare your bookkeeping records with your bank statements on a
                regular basis to identify errors, missing transactions, or
                duplicate entries.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Review Financial Reports
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Reviewing your income statement and balance sheet regularly
                helps you understand your business performance and make better
                financial decisions.
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
            The Canada Revenue Agency (CRA) provides official guidance on
            record keeping, business expenses, GST/HST, payroll, and other
            bookkeeping requirements. The resources below will take you
            directly to the relevant CRA pages.
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
            Need Help Managing Your Books?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Accurate bookkeeping is the foundation of every successful
            business. Whether you need monthly bookkeeping, bank
            reconciliations, financial reporting, GST/HST support, or
            year-end preparation, Sky High Financial Management can help
            keep your financial records organized and up to date.
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