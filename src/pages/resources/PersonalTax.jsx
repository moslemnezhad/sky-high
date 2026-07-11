import {
  Briefcase,
  User,
  TrendingUp,
  Home,
  BadgeDollarSign,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const personalTopics = [
  {
    icon: Briefcase,
    title: "Employment Income",
    description:
      "Understand T4 slips, taxable benefits, payroll deductions, and employment income reporting.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/income-you-earned/employment-income.html",
  },

  {
    icon: User,
    title: "Self-Employment Income",
    description:
      "Information for freelancers, contractors, consultants, and sole proprietors.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships.html",
  },

  {
    icon: TrendingUp,
    title: "Investment Income",
    description:
      "Interest, dividends, capital gains, and investment income reporting.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/income-you-earned/investment-income.html",
  },

  {
    icon: Home,
    title: "Rental Income",
    description:
      "Reporting rental income and understanding deductible rental expenses.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4036.html",
  },
];

const governmentResources = [
  {
    title: "CRA Personal Income Tax",
    link:
      "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html",
  },

  {
    title: "CRA My Account",
    link:
      "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html",
  },

  {
    title: "Tax Credits & Deductions",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html",
  },

  {
    title: "CRA Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },

  {
    title: "Benefits & Credits",
    link:
      "https://www.canada.ca/en/services/benefits.html",
  },
];

export default function PersonalTax() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Personal Tax Resources"
        title="Personal Tax Resource Centre"
        description="Simple guidance to help Canadian taxpayers understand personal income tax and find trusted Canada Revenue Agency resources."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Personal Tax?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Personal income tax is paid by individuals on income earned during
            the year. Most Canadians must file an income tax return annually,
            even if no tax is owing, to report their income and determine
            eligibility for tax credits and government benefits.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Preparing your tax return becomes much easier when your documents
            are organized and you understand the different sources of income
            that need to be reported.
          </p>

        </div>

      </section>
            {/* Common Personal Tax Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Personal Tax Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Understanding the most common sources of income and available tax
            benefits can help you prepare a complete and accurate personal tax
            return.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {personalTopics.map((topic, index) => {

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


      {/* Things You Should Know */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Things You Should Know
          </h2>

          <div className="mt-10 space-y-8">

            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Gather Your Tax Documents
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Before preparing your return, collect all of your tax slips and
                supporting documents such as T4s, T5s, RRSP contribution slips,
                tuition receipts, medical expenses, and charitable donation
                receipts.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Review All Sources of Income
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Income may come from employment, self-employment, investments,
                pensions, rental properties, or other sources. Reporting all
                income helps avoid reassessments and penalties.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Create a CRA My Account
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                CRA My Account allows you to access tax slips, Notices of
                Assessment, RRSP contribution room, benefit information, and
                many other online services.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Don't Miss Important Deadlines
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Filing your return and paying any balance owing on time can
                help you avoid interest charges and late filing penalties.
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
            The Canada Revenue Agency (CRA) provides official information,
            online services, tax forms, publications, and guidance to help
            individuals meet their tax obligations. The resources below will
            take you directly to the relevant CRA pages.
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
            Need Help With Your Personal Taxes?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Every taxpayer's situation is unique. Whether you need help
            preparing your personal income tax return, understanding tax
            deductions and credits, reporting investment or rental income,
            or planning for future tax years, Sky High Financial Management
            is here to help.
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