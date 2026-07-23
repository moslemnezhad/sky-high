import {
  Globe,
  Landmark,
  FileText,
  Calculator,
  BadgeDollarSign,
  ExternalLink,
} from "lucide-react";

import PageHero from "../components/common/PageHero";

const crossBorderTopics = [
  {
    icon: Globe,
    title: "Canadian Tax Residency",
    description:
      "Understand how residency affects your Canadian tax obligations and worldwide income reporting.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents.html",
  },

  {
    icon: Landmark,
    title: "Foreign Income",
    description:
      "Learn how Canadian residents report employment, investment, rental, and business income earned outside Canada.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents.html",
  },

  {
    icon: BadgeDollarSign,
    title: "Foreign Property Reporting",
    description:
      "Information about reporting specified foreign property, including Form T1135.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1135.html",
  },

  {
    icon: Calculator,
    title: "Canada–U.S. Tax Treaty",
    description:
      "Overview of the tax treaty designed to reduce double taxation between Canada and the United States.",
    link:
      "https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention.html",
  },
];

const governmentResources = [
  {
    title: "CRA International Tax",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents.html",
  },

  {
    title: "Form T1135",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1135.html",
  },

  {
    title: "Canada–U.S. Tax Treaty",
    link:
      "https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/country/united-states-america-convention.html",
  },

  {
    title: "CRA Non-Residents",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/non-residents-canada.html",
  },

  {
    title: "CRA Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function CrossBorder() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Canada–USA Tax Resources"
        title="Canada–USA Tax Resource Centre"
        description="Simple guidance for individuals and businesses with tax obligations in both Canada and the United States."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Canada–USA Tax?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Cross-border taxation applies when individuals or businesses have
            financial activities in both Canada and the United States. This
            may include living in one country while earning income in the
            other, owning foreign investments, operating a business across
            borders, or filing tax returns in both countries.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Understanding your residency status, reporting obligations, and
            available tax treaty benefits can help reduce double taxation and
            ensure compliance with both Canadian and U.S. tax rules.
          </p>

        </div>

      </section>
            {/* Common Canada–USA Tax Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Canada–USA Tax Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Cross-border tax situations can become complex. These are some of
            the most common topics that Canadian individuals and businesses
            encounter.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {crossBorderTopics.map((topic, index) => {

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
                Canadian Tax Residency Matters
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Your Canadian residency status determines whether you report
                only Canadian income or your worldwide income on your Canadian
                tax return.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Foreign Income May Need To Be Reported
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Canadian residents generally report income earned anywhere in
                the world, including employment, investments, rental income,
                and business income.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Foreign Assets May Require Additional Reporting
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Certain foreign investments and property may require additional
                reporting to the CRA, including Form T1135 for specified
                foreign property.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                The Tax Treaty Can Reduce Double Taxation
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Canada and the United States have a tax treaty that helps
                prevent double taxation and determines which country has the
                primary right to tax certain types of income.
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
            The Canada Revenue Agency (CRA) and the Department of Finance
            provide official information on international taxation,
            non-resident tax rules, foreign income reporting, Form T1135,
            and the Canada–U.S. Tax Treaty. The resources below will take
            you directly to the relevant government pages.
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
            Need Help With Canada–U.S. Taxes?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Cross-border tax matters can quickly become complicated.
            Whether you have foreign income, U.S. investments, Canadian
            residency questions, Form T1135 reporting, or tax obligations
            in both countries, Sky High Financial Management can help you
            understand your reporting requirements and remain compliant.
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