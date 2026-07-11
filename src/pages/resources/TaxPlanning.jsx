import {
  Calendar,
  PiggyBank,
  TrendingUp,
  Briefcase,
  Users,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const planningTopics = [
  {
    icon: PiggyBank,
    title: "RRSP Planning",
    description:
      "RRSP contributions may reduce your taxable income while helping you save for retirement.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans.html",
  },

  {
    icon: TrendingUp,
    title: "TFSA & Investments",
    description:
      "Understand TFSA contribution limits and the tax treatment of investments.",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html",
  },

  {
    icon: Briefcase,
    title: "Business Tax Planning",
    description:
      "Business owners should review income, expenses, payroll and tax instalments throughout the year.",
    link: "https://www.canada.ca/en/services/taxes/businesses.html",
  },

  {
    icon: Users,
    title: "Family Tax Planning",
    description:
      "Life events such as marriage, children, retirement or separation may affect your taxes and benefits.",
    link: "https://www.canada.ca/en/services/benefits.html",
  },
];

const governmentResources = [
  {
    title: "CRA Tax Planning",
    link: "https://www.canada.ca/en/services/taxes.html",
  },

  {
    title: "RRSP Information",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans.html",
  },

  {
    title: "TFSA Information",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html",
  },

  {
    title: "Capital Gains",
    link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains/calculating-reporting-your-capital-gains-losses.html",
  },

  {
    title: "CRA Forms & Publications",
    link: "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function TaxPlanning() {
  return (
    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Tax Planning Resources"
        title="Tax Planning Resource Centre"
        description="Simple guidance to help individuals and business owners make informed financial decisions throughout the year while staying compliant with Canadian tax laws."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Tax Planning?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Tax planning means organizing your finances throughout the year
            to legally reduce your tax burden and avoid unexpected tax
            liabilities. Good planning helps you make informed financial
            decisions before the end of the tax year rather than reacting
            after it has ended.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Whether you're an employee, investor, self-employed
            professional, or business owner, planning ahead can improve
            cash flow and help you take advantage of available tax-saving
            opportunities.
          </p>

        </div>
      </section>
            {/* Tax Planning Opportunities */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Tax Planning Opportunities
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Tax planning isn't about avoiding taxes—it's about making informed
            financial decisions throughout the year. The topics below highlight
            some of the most common areas where planning may help.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {planningTopics.map((topic, index) => {
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
                      <Icon className="text-[#C8A24A]" size={26} />
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

            <div className="flex gap-5">
              <Calendar className="text-[#C8A24A] mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D4D]">
                  Plan Before Year-End
                </h3>
                <p className="mt-2 text-gray-600 leading-7">
                  Many tax-saving opportunities are only available before the
                  end of the tax year. Planning early gives you more options.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Calendar className="text-[#C8A24A] mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D4D]">
                  Keep Good Records
                </h3>
                <p className="mt-2 text-gray-600 leading-7">
                  Keep receipts, investment records, contribution slips, and
                  important tax documents throughout the year.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Calendar className="text-[#C8A24A] mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D4D]">
                  Major Life Changes Matter
                </h3>
                <p className="mt-2 text-gray-600 leading-7">
                  Starting a business, buying a home, retiring, getting married,
                  or having children may all affect your tax situation.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Calendar className="text-[#C8A24A] mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D4D]">
                  Professional Advice Can Help
                </h3>
                <p className="mt-2 text-gray-600 leading-7">
                  Every taxpayer's situation is different. A professional tax
                  advisor can help you identify opportunities that fit your
                  financial goals.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>
            {/* Government Resources */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Official Government Resources
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            The Canada Revenue Agency (CRA) provides the latest information,
            forms, publications, contribution limits, and guidance on tax
            planning. Visit the resources below for official information.
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
            Need Professional Tax Planning?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Effective tax planning starts before important financial decisions
            are made. Whether you're an individual, investor, self-employed
            professional, or business owner, Sky High Financial Management can
            help you develop practical tax strategies that support your
            long-term financial goals while remaining fully compliant with
            Canadian tax laws.
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